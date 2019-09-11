import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarsStatic = () => {
  useEffect(() => {
    drawGraph();
  });

  const width = 960;
  const height = 500;

  // Does the initial drawing of the graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];
    
    // Create a colour scale to use for the bars
    const colour = d3.scaleLinear()
    .domain([1, d3.max(data)])
    .range(['orange', 'purple']);

    // Create a scaling for the x axis
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, width])
      .paddingInner(0.08);

    // Create a scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 50]);

    // Setup the canvas
    const svg = d3.select('#bars-static')
      .attr('width', width)
      .attr('height', height);

    // Draw initial bars
    svg.selectAll('rect')
      .data(data) // The starting data set
      .enter() // Start adding new data points for any not currently mapped
      .append('rect') // Append a rect element (a bar for the chart)
      .attr('x', (d, i) => xScale(i)) // Position on the x axis according to the scaling
      .attr('y', d => yScale(d)) // Position on the y axis according to the scaling
      .attr('width', xScale.bandwidth()) // Set the bar width to an even amount
      .attr('height', d => height - yScale(d)) // Set the height of the bar according to the scaling
      .attr('fill', d => colour(d)); // Colour bar according to data value
  };

  return <svg id="bars-static" />;
};

export default BarsStatic;
