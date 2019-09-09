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

    // Create a scaling for the x axis
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, width])
      .paddingInner(0.08);

    // Create a scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([50, height]);

    // Setup the canvas
    const svg = d3.select('#bars')
      .attr('width', width)
      .attr('height', height)
      .style('margin-top', 100)
      .style('margin-left', 100);

    // Draw initial bars
    svg.selectAll('rect')
      .data(data) // The starting data set
      .enter() // Start adding new data points for any not currently mapped
      .append('rect') // Append a rect element (a bar for the chart)
      .attr('x', (d, i) => xScale(i)) // Position on the x axis according to the scaling
      .attr('y', d => height - yScale(d)) // Position on the y axis according to the scaling
      .attr('width', xScale.bandwidth()) // Set the bar width to an even amount
      .attr('height', d => yScale(d)) // Set the height of the bar according to the scaling
      .attr('fill', d => `rgb(0, 0, ${d * 10})`); // Colour bar according to data value
  };

  return <svg id="bars" />;
};

export default BarsStatic;