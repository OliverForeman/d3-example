import React, { useEffect } from 'react';
import * as d3 from 'd3';

const PieStatic = () => {
  useEffect(() => {
    drawGraph();
  });

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];
    const radius = Math.min(width, height) / 2 - 20;

    const svg = d3.select('#pie-static')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const colour = d3.scaleLinear()
      .domain([1, d3.max(data)])
      .range(['#d1e2f3', '#023858']);

    const pie = d3.pie()
      .value(d => d)
      .sort(null);
    
    const dataReady = pie(data);

    svg.selectAll('slices')
      .data(dataReady)
      .enter()
      .append('path')
        .attr('d', d3.arc()
          .innerRadius(0)
          .outerRadius(radius)
        )
        .attr('fill', d => colour(d.value))
        .attr('stroke', 'black')
        .style('stroke-width', '2px')
        .style('opacity', 0.7);
  };

  return <svg id="pie-static" />
};

export default PieStatic;
