import React, { useEffect } from 'react';
import * as d3 from 'd3';

const LegendStatic = () => {
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 480 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10]; // Max 16 elements will fit to screen vertically

    const colour = d3.scaleLinear()
      .domain(d3.extent(data))
      .range(['#d1e2f3', '#023858']);

    /* Circle legend */

    const svg = d3.select('#legend-static')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 4})`);

    const legend = svg.selectAll('.legend')
      .data(data)
      .enter()
      .append('g')
        .attr('class', 'legend')
        .attr('transform', (_, i) => `translate(0, ${i * 30})`);

    legend.append('circle')
      .attr('r', 9)
      .attr('fill', d => colour(d));

    legend.append('text')
      .attr('id', (_, i) => `text-${i}`)
      .text(d => d)
      .attr('x', 15)
      .attr('y', 6)
      .style('font-size', '1.2rem')
      .attr('font-weight', 'bold');

    /* Scale legend */
    
    const lMargin = { top: 10, right: 60, bottom: 10, left: 2 };
    const lWidthFull = 100;
    const lWidth = lWidthFull - lMargin.left - lMargin.right;
    const lHeightFull = 250;
    const lHeight = lHeightFull - lMargin.top - lMargin.bottom;

    const canvas = d3.select('#legend-static-container')
      .style('width', `${width + margin.left + margin.right}px`)
      .style('height', `${height + margin.top + margin.bottom}px`)
      .append('div')
        .style('margin-left', `${width / 2}px`)
        .style('margin-top', `${(height / 4) - margin.top}px`)
        .append('canvas')
          .attr('width', 1)
          .attr('height', lHeight)
          .style('width', `${lWidth}px`)
          .style('height', `${lHeight}px`)
          .node();

    const ctx = canvas.getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, lHeight);
    gradient.addColorStop(0, '#d1e2f3');
    gradient.addColorStop(1, '#023858');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, lWidth, lHeight);

    const legendSvg = d3.select('#legend-static-container div')
      .append('svg')
        .attr('width', `${lWidthFull}px`)
        .attr('height', `${lHeightFull}px`)
        .attr('transform', `translate(0, ${lMargin.top})`);

    const legendScale = d3.scaleLinear()
      .range([1, lHeight])
      .domain(colour.domain());

    const legendAxis = d3.axisRight(legendScale)
      .tickSize(6)
      .ticks(data.length);

    legendSvg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0, ${lMargin.top - 1})`)
      .call(legendAxis)
      .select('.domain')
        .attr('visibility', 'hidden');
  };
  
  useEffect(() => {
    drawGraph();
  });

  return (
    <div style={{ display: 'flex' }}>
      <svg id="legend-static" />
      <div id="legend-static-container" />
    </div>
  )
};

export default LegendStatic;
