import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Lines = () => {
  useEffect(() => {
    drawGraph();
  });

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Used to draw the initial graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Create the scaling for the x axis
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1]) // The range of values to be used for the scale
      .range([0, width]); // The positioning for the scale to range over

    // Create the scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)]) // The range of values to be used for the scale
      .range([height, 0]); // The positioning for the scale to range over (reversed to start at bottom-left)

    // Setup the canvas
    const svg = d3.select('#lines')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);
    
    // Create a line generator for drawing to the canvas
    const line = d3.line()
      .x((d, i) => xScale(i)) // Position on the x axis according to array index
      .y(d => yScale(d)) // Position on the y axis according to the data value
      .curve(d3.curveMonotoneX); // Apply a curve algorithm for drawing the line

    // Draw the line on the canvas
    svg.append('path')
      .datum(data) // Apply the dataset to the line
      .attr('class', 'line') // Add a class to select the line later
      .attr('d', line) // Apply the line generator to the data
      .attr('fill', 'none') // Don't colour the space under/above the line
      .attr('stroke', 'black') // Set the colour of the line
      .attr('stroke-width', 3.0); // Set how thick the drawn line should be

    // Add dots at each data point on the line
    svg.selectAll('circle')
      .data(data) // Apply the dataset
      .enter() // Add new data points
      .append('circle') // Add a circle for each data point
        .attr('cx', (d, i) => xScale(i)) // Position on the x axis according to the array index
        .attr('cy', d => yScale(d)) // Position on the y axis according to the data value
        .attr('r', 5); // Set the radius of the circle
  };

  // Used to update the line and circles
  const update = data => {
    const svg = d3.select('#lines').select('g');

    // Update the x scale with the new data set
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    // Update the y scale with the new data set
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // Create the line generator
    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    // Create a line generator to move the line to the bottom of the graph
    const lineFlat = d3.line()
      .x((d, i) => xScale(i))
      .y(() => height)
      .curve(d3.curveMonotoneX);

    // Handle the update of the line
    svg.select('.line')
      .datum(data) // Apply the new data set
      .transition() // Start a transition
      .duration(1000)
      .attr('d', lineFlat) // Move the line to the bottom of the graph
      .transition() // Start a transition
      .duration(2000)
      .delay(500)
      .attr('d', line); // Apply the line generator to the new data

    // Handle removal of circles for excess data points
    svg.selectAll('circle')
      .data(data) // Apply the new data set
      .exit() // Get all data points that are no longer mapped
      .transition() // Start a transition
      .duration(750)
      .attr('r', 0) // Set the radius to 0 so the circle shrinks away
      .remove(); // Remove the element from the canvas

    // Handle the update of existing data points
    svg.selectAll('circle')
      .data(data) // Apply the new data set
      .transition() // Start a transition
      .duration(1000)
      .attr('cx', (d, i) => xScale(i)) // Set the x position according to the array index
      .attr('cy', height) // Set the y position to the bottom of the graph
      .transition() // Start a transition
      .duration(2000)
      .delay(500)
      .attr('cy', d => yScale(d)); // Set the y position according to the data value

    // Handle the adding of new data points
    svg.selectAll('circle')
      .data(data) // Apply the new data set
      .enter() // Get all data points that are not currently mapped
      .append('circle') // Add a new circle for each new data point
        .attr('cx', (d, i) => xScale(i)) // Set the x position according to the array index
        .attr('cy', height) // Set the y position to the bottom of the graph
        .attr('r', 5) // Set the radius of the circle
        .transition() // Start a transition
        .duration(2000)
        .delay(1500) // Start after the existing line has moved to the bottom of the graph
        .attr('cy', d => yScale(d)); // Set the y position according to the data value
  };

  // Update data set after 1 second, increases the data points
  setTimeout(() => {
    update([10, 2, 7, 4, 50, 20, 42, 24, 6, 4, 36, 8]);
  }, 1000);

  // Update data set after 4 seconds, 3 seconds after first update, reduces data points
  setTimeout(() => {
    update([5, 7, 2, 6, 9]);
  }, 5000);

  return <svg id="lines" />
};

export default Lines;
