import React, { useEffect } from 'react';
import * as d3 from 'd3';

const LinesStatic = () => {
  useEffect(() => {
    drawGraph();
  });

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Used to draw the graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Create the scaling for the x axis
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1]) // The range of values to be used for the scale
      .range([0, width]); // The positioning for the scale to range over

    // Create the scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)]) // The range of values to be used for the scale
      .range([height, 0]); // The positioning for the scale to range over (reversed to start at bottom-left corner)

    // Setup the canvas
    const svg = d3.select('#lines-static')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Create a line generator for drawing to the canvas 
    const line = d3.line()
      .x((d, i) => xScale(i)) // Position on x axis according to array index
      .y(d => yScale(d)) // Position on the y axis according to the data value
      .curve(d3.curveMonotoneX); // Apply a curve algorithm for drawing the line

    // Draw the line on the canvas 
    svg.append('path')
      .datum(data) // Apply the dataset to the line
      .attr('d', line) // Apply the line generator to the data
      .attr('fill', 'none') // Don't colour the space under/above the line
      .attr('stroke', 'black') // Set the colour of the line
      .attr('stroke-width', 3.0); // Set how thick the drawn line should be

    // Add dots at each data point on the line
    svg.selectAll('circle')
      .data(data) // Apply the dataset
      .enter() // Add new data points for any not currently mapped
      .append('circle') // Add a circle for each new data point
        .attr('cx', (d, i) => xScale(i)) // Position on the x axis according to the array index
        .attr('cy', d => yScale(d)) // Position on the y axis according to the data value
        .attr('r', 5); // Set the radius of the circle
  };

  return <svg id="lines-static" />
};

export default LinesStatic;
