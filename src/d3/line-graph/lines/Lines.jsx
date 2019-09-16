import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Lines = () => {
  useEffect(() => {
    drawGraph();

    return () => {
      if (interval) clearInterval(interval);
      timers.forEach(timer => clearTimeout(timer));
    };
  });

  // Stores timeout IDs to be cleared on component unmount
  const timers = [];

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  let oldScale; // Holds the last used scaling to animate the line transitions

  // Used to draw the initial graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Create the scaling for the x axis
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1]) // The range of values to be used for the scale
      .range([0, width]); // The positioning for the scale to range over

    oldScale = xScale; // Set the first scaling as the last used

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

    // Create the line generator for the new scaling
    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    // Create a line generator for the last used scaling to move the line to the bottom of the graph
    const lineFlatOldScale = d3.line()
      .x((d, i) => oldScale(i))
      .y(height)
      .curve(d3.curveMonotoneX);

    // Create a line generator for the new scaling to draw it at the bottom of the graph
    const lineFlatNewScale = d3.line()
      .x((d, i) => xScale(i))
      .y(height)
      .curve(d3.curveMonotoneX);

    // Handle the update the line
    svg.select('.line')
      .transition() // Move the line to the bottom of the graph
      .duration(1000)
      .attr('d', lineFlatOldScale) // Uses the old scaling to move the current line without resizing on the axis
      .selection() // Returns the line selection so the data can be updated
      .datum(data) // Apply the new data set
      .transition() // Keep the line flat but now scaled to the new axis
      .duration(0) // Happens instantly, transition is used to apply delay
      .delay(1000)
      .attr('d', lineFlatNewScale) // Uses the new scaling to keep the line flat but rescaled
      .transition() // Move the line up to the new data positions
      .duration(2000)
      .delay(1000)
      .attr('d', line); // Uses the new scaling to move the line up to its final position

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
      .transition() // Reduce radius so the data points disappear
      .duration(750)
      .attr('r', 0) // Sets the radius to 0 so the circles appear invisible
      .selection() // Return the selection to escape timing delay behind the last transition
      .transition() // Move the circles to the correct position on the x axis
      .duration(0) // Happens instantly, transition is used to apply delay
      .delay(750)
      .attr('cx', (d, i) => xScale(i)) // Set the x position according to the array index
      .attr('cy', height) // Set the height to the bottom of the graph
      .transition() // Increase the radius to the points appear
      .duration(750)
      .delay(250)
      .attr('r', 5) // Sets the radius to 5 so the circles can be seen again
      .transition() // Move the circles up with the line
      .duration(2000)
      .delay(250)
      .attr('cy', d => yScale(d)); // Set the y position according to the data value

    // Handle the adding of new data points
    svg.selectAll('circle')
      .data(data) // Apply the new data set
      .enter() // Get all data points that are not currently mapped
      .append('circle') // Add a new circle for each new data point
        .attr('cx', (d, i) => xScale(i)) // Set the x position according to the array index
        .attr('cy', height) // Set the y position to the bottom of the graph
        .attr('r', 0) // Set the radius of the circle to 0 so it can't be seen
        .transition() // Make the circles visible
        .duration(750)
        .delay(1000)
        .attr('r', 5) // Sets the radius to 5 so the circles are visible
        .transition() // Move the circles up with the line
        .duration(2000)
        .delay(250)
        .attr('cy', d => yScale(d)); // Set the y position according to the data value

    oldScale = xScale; // Set the current scale as the last used scaling
  };

  // Update the data set, increases data points
  timers.unshift(setTimeout(() => {
    timers.pop();
    update([10, 2, 7, 4, 50, 20, 42, 24, 6, 4, 36, 8]);
  }, 1000));

  // Update the data set, reduces data points
  timers.unshift(setTimeout(() => {
    timers.pop();
    update([5, 7, 2, 6, 9]);
  }, 5500));

  // Return to the original data set
  timers.unshift(setTimeout(() => {
    timers.pop();
    update([12, 5, 6, 6, 9, 10]);
  }, 10000));

  // Runs the animation on a loop
  const interval = setInterval(() => {
    update([10, 2, 7, 4, 50, 20, 42, 24, 6, 4, 36, 8]);

    timers.unshift(setTimeout(() => {
      timers.pop();
      update([5, 7, 2, 6, 9]);
    }, 4500));

    timers.unshift(setTimeout(() => {
      timers.pop();
      update([12, 5, 6, 6, 9, 10]);
    }, 9000));
  }, 14500);

  return <svg id="lines" />
};

export default Lines;
