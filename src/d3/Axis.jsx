import React, { useEffect } from 'react';
import * as d3 from 'd3';

// See for examples of axis drawing -> https://www.d3-graph-gallery.com/graph/custom_axis.html

const Axis = () => {
  useEffect(() => {
    drawGraph();
  });

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Draw the initial scales for a graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Get the svg element
    const svg = d3.select('#axis')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Creating the scaling for the x axis
    const xScale = d3.scaleLinear()
      // .domain([0, 100]) // The range for the values to be written on the axis (0 to 100)
      .domain([0, data.length])
      .range([0, width]); // The positioning of the axis (0 to width in px)

    // Creating the scaling for the y axis
    const yScale = d3.scaleLinear()
      // .domain([0, 100]) // The range for the values to be written on the axis (0 to 100)
      .domain([0, Math.max(...data)])
      .range([height, 0]); // The positioning of the axis (height to 0 in px), reversed as drawing starts at the top left

    // Create the x axis
    svg.append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(0, ${height})`) // Positioning of the axis
      .call(d3.axisBottom(xScale) // Draw a bottom axis using our scaling
        .ticks(data.length) // Set the number of ticks to draw on the axis (approximately)
      ); 

    // Create the y axis
    svg.append('g')
      .attr('class', 'yAxis')
      // .attr('transform', 'translate(50, 0)') // Positioning of the axis
      .call(d3.axisLeft(yScale)); // Draw a left axis using our scaling

    // Add a label to the x axis
    svg.append('text')
      .attr('text-anchor', 'end') // Anchor end of text to positioning
      .attr('x', width) // Set the x position for the text
      .attr('y', height + margin.top + 20) // Set the y position for the text (height of graph + margin + distance to place below graph)
      .text('X axis title'); // The writing for the title of the axis

    // Add a label to the y axis
    svg.append('text')
      .attr('text-anchor', 'end') // Anchor end of text to positioning
      .attr('transform', 'rotate(-90)') // Rotate the text so it's vertical
      .attr('y', -margin.left + 20) // Move to margin then in (moves on x axis due to rotation)
      .attr('x', -margin.top) // Move down from edge of graph (moves on y axis due to rotation)
      .text('Y axis title'); // The writing for the title of the axis
  };

  // Update the scales
  const update = data => {
    const svg = d3.select('#axis');

    // Update the scaling with the new data
    const xScale = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, width]);

    // Update the scaling with the new data
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // Update the x axis
    svg.select('.xAxis')
      .transition() // Start transition for axis values
      .duration(750) // Time in ms for transition
      .call(d3.axisBottom(xScale) // Draw the axis according to the updated scaling
        .ticks(data.length) // Set the number of ticks according the new dataset
      );

    // Update the y axis
    svg.select('.yAxis')
      .transition() // Start transition for axis values
      .duration(750) // Time in ms for transition
      .call(d3.axisLeft(yScale)); // Draw the axis according to the updated scaling
  };

  // Updata data set after 1 second, increases data points
  setTimeout(() => {
    update([10, 2, 7, 4, 50, 20, 51, 24, 6, 4, 9, 8]);
  }, 1000);

  // Update data set after 4 seconds, 3 seconds after first update, reduces data points
  setTimeout(() => {
    update([5, 7, 2, 6, 9]);
  }, 4000);

  return <svg id="axis" />
};

export default Axis;
