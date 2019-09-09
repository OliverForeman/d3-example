import React, { useEffect } from 'react';
import * as d3 from 'd3';

const GraphStatic = () => {
  useEffect(() => {
    drawGraph();
  });

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Select a translated graphics tag for drawing the elements within
    const svg = d3.select('#graph')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // SCALES

    // Create a scaling for the x axis
    const xScaleAxis = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, width]);

    // Create an x scaling for the bars to be drawn with
    const xScaleBars = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([0, width])
      .paddingInner(0.05)
      .paddingOuter(0.05);

    // Create a scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // AXIS

    // Create the x axis
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScaleAxis)
        .ticks(data.length) // Give the approximate number of ticks to be drawn
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

    // BARS

    // Create the bars for the bar chart
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScaleBars(i))
      .attr('y', d => yScale(d))
      .attr('width', xScaleBars.bandwidth()) // Gives all bars an equal width
      .attr('height', d => height - yScale(d))
      .attr('fill', d => `rgb(0, 0, ${d * 10})`); // Set colour according to data value
  };

  return <svg id="graph" />
};

export default GraphStatic;
