import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Graph = () => {
  useEffect(() => {
    drawGraph();
  });

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Used to draw the initial graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Setup the canvas
    const svg = d3.select('#lines-graph')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // SCALES

    // Create the scaling for the x axis
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    // Create the scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // AXIS

    // Create the x axis
    svg.append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale)
        .ticks(data.length)
      );

    // Create the y axis
    svg.append('g')
      .attr('class', 'yAxis')
      .call(d3.axisLeft(yScale));

    // Add text to the x axis
    svg.append('text')
      .attr('text-anchor', 'end')
      .attr('x', width)
      .attr('y', height + margin.top + 20)
      .text('X Axis');

    // Add text to the y axis
    svg.append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 20)
      .attr('x', -margin.top)
      .text('Y Axis');

    // LINE & DOTS

    // Create the line generator for drawing
    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    // Create the line from the data
    svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 3.0);

    // Draw circles at each data point
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
        .attr('cx', (d, i) => xScale(i))
        .attr('cy', d => yScale(d))
        .attr('r', 5);
  };

  // Used to update the lines and circles
  const update = data => {
    const svg = d3.select('#lines-graph').select('g');

    // SCALES

    // Update the x scale with the new data set
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    // Update the y scale with the new data set
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // AXIS

    // Update the x axis with the new scaling
    svg.select('.xAxis')
      .transition() // Start a transition
      .duration(1000) // Moves with the line moving to the bottom of the graph
      .call(d3.axisBottom(xScale) // Update the scaling
        .ticks(data.length) // Update the number of ticks to draw
      );

    // Update the y axis with the new scaling
    svg.select('.yAxis')
      .transition() // Start a transition
      .duration(2000) // Moves with the line moving up from the bottom of the graph
      .delay(1500)
      .call(d3.axisLeft(yScale)); // Update the scaling

    // LINE & DOTS

    // Create the line generator
    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    // Create a line generator to move the line to the bottom of the graph
    const lineFlat = d3.line()
      .x((d, i) => xScale(i))
      .y(height)
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
      .attr('d', line); // Move the line up to its new position

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
        .delay(1500)
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

  return <svg id="lines-graph" />
};

export default Graph;
