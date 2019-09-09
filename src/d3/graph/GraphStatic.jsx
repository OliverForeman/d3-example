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

    const svg = d3.select('#graph')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // SCALES

    const xScaleAxis = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, width]);

    const yScaleAxis = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const xScaleBars = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([0, width])
      .paddingInner(0.05)
      .paddingOuter(0.05);

    const yScaleBars = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height]);

    // AXIS

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScaleAxis)
        .ticks(data.length)
      );

    svg.append('g')
      .call(d3.axisLeft(yScaleAxis));

    svg.append('text')
      .attr('text-anchor', 'end')
      .attr('x', width)
      .attr('y', height + margin.top + 20)
      .text('X Axis');

    svg.append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 20)
      .attr('x', -margin.top)
      .text('Y Axis');

    // BARS

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScaleBars(i))
      .attr('y', d => height - yScaleBars(d))
      .attr('width', xScaleBars.bandwidth())
      .attr('height', d => yScaleBars(d))
      .attr('fill', d => `rgb(0, 0, ${d * 10})`);
  };

  return <svg id="graph" />
};

export default GraphStatic;