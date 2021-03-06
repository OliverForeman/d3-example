import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarsStatic = () => {
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Does the initial drawing of the graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];
    
    // Create a colour scale to use for the bars
    const colour = d3.scaleLinear()
      .domain([1, d3.max(data)])
      .range(['#d1e2f3', '#023858']);

    // Create a scaling for the x axis
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, width])
      .paddingInner(0.08);

    // Create a scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // Setup the canvas
    const svg = d3.select('#bars-static')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Draw initial bars
    svg.selectAll('rect')
      .data(data) // The starting data set
      .enter() // Start adding new data points for any not currently mapped
      .append('rect') // Append a rect element (a bar for the chart)
      .attr('x', (_, i) => xScale(i)) // Position on the x axis according to the scaling
      .attr('y', d => yScale(d)) // Position on the y axis according to the scaling
      .attr('width', xScale.bandwidth()) // Set the bar width to an even amount
      .attr('height', d => height - yScale(d)) // Set the height of the bar according to the scaling
      .attr('fill', d => colour(d)); // Colour bar according to data value
  };

  useEffect(() => {
    drawGraph();
  });

  return <svg id="bars-static" />;
};

export default BarsStatic;
