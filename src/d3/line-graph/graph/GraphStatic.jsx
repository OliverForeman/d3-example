import React, { useEffect } from 'react';
import * as d3 from 'd3';

const GraphStatic = () => {
  useEffect(() => {
    drawGraph();
  });

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Used to draw the graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Setup the canvas
    const svg = d3.select('#lines-graph-static')
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
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale)
        .ticks(data.length)
      );

    // Create the y axis
    svg.append('g')
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
      .x((_, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    // Create the line from the data
    svg.append('path')
      .datum(data)
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 3.0);

    // Draw circles at each data point
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
        .attr('cx', (_, i) => xScale(i))
        .attr('cy', d => yScale(d))
        .attr('r', 5);
  };

  return <svg id="lines-graph-static" />
};

export default GraphStatic;
