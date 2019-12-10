import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Legend = () => {
  const timers = [];
  let currentData = [];

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 480 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const lMargin = { top: 10, right: 60, bottom: 10, left: 2 };
  const lWidthFull = 100;
  const lWidth = lWidthFull - lMargin.left - lMargin.right;
  const lHeightFull = 250;
  const lHeight = lHeightFull - lMargin.top - lMargin.bottom;

  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];
    currentData = data;

    const colour = d3.scaleLinear()
      .domain(d3.extent(data))
      .range(['#d1e2f3', '#023858']);

    /* Circle Legend */

    const svg = d3.select('#legend-animated')
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

    /* Scale Legend */

    const canvas = d3.select('#legend-animated-container')
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

    const legendSvg = d3.select('#legend-animated-container div')
      .append('svg')
        .attr('width', `${lWidthFull}px`)
        .attr('height', `${lHeightFull}px`)
        .attr('transform', `translate(0, ${lMargin.top})`);

    const legendScale = d3.scaleLinear()
      .range([1, lHeight])
      .domain(colour.domain())
      .nice();

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

  const update = (data) => {
    const colour = d3.scaleLinear()
      .domain(d3.extent(data))
      .range(['#d1e2f3', '#023858']);

    /* Circle Legend */

    const textFormat = d3.format(',d');

    const svg = d3.select('#legend-animated').select('g');
    
    svg.selectAll('.legend')
      .data(data)
      .exit()
      .select('circle')
        .transition()
        .duration(2000)
        .attr('cx', -25)
        .style('opacity', 0)
        .remove();

    svg.selectAll('.legend')
      .data(data)
      .exit()
      .select('text')
        .transition()
        .duration(2000)
        .attr('x', -10)
        .style('opacity', 0)
        .remove();
    
    svg.selectAll('.legend')
      .data(data)
      .exit()
      .transition()
      .duration(0)
      .delay(2000)
      .remove();

    svg.selectAll('.legend')
      .data(data)
      .select('circle')
        .transition()
        .duration(2000)
        .attr('fill', d => colour(d));

    svg.selectAll('.legend')
      .data(data)
      .select('text')
        .transition()
        .duration(2000)
        .tween('text', (d, i) => {
          const interpolate = d3.interpolate(currentData[i], d);
          currentData[i] = d;
          const element = d3.select(`#text-${i}`);
          return t => element.text(textFormat(interpolate(t)));
        });

    const legend = svg.selectAll('.legend')
      .data(data)
      .enter()
      .append('g')
        .attr('class', 'legend')
        .attr('transform', (_, i) => `translate(0, ${i * 30})`);

    legend.append('circle')
      .attr('r', 9)
      .attr('fill', d => colour(d))
      .attr('cx', -25)
      .style('opacity', 0)
      .transition()
      .duration(2000)
      .attr('cx', 0)
      .style('opacity', 1);
  
    legend.append('text')
      .attr('id', (_, i) => `text-${i}`)
      .text((d, i) => {
        currentData[i] = d;
        return d;
      })
      .attr('x', -10)
      .attr('y', 6)
      .style('font-size', '1.2rem')
      .style('opacity', 0)
      .attr('font-weight', 'bold')
      .transition()
      .duration(2000)
      .attr('x', 15)
      .style('opacity', 1);

    /* Scale Legend */

    const legendSvg = d3.select('#legend-animated-container div').select('svg');
    
    const legendScale = d3.scaleLinear()
      .range([1, lHeight])
      .domain(colour.domain())
      .nice();

    const legendAxis = d3.axisRight(legendScale)
      .tickSize(6)
      .ticks(data.length);

    legendSvg.select('.axis')
      .transition()
      .duration(2000)
      .call(legendAxis);
  };

  timers.unshift(setTimeout(() => {
    timers.pop();
    update([10, 2, 7, 4, 50, 20, 42, 24, 6, 4, 36, 8]);
  }, 1000));

  timers.unshift(setTimeout(() => {
    timers.pop();
    update([5, 7, 2, 6, 9]);
  }, 4000));

  timers.unshift(setTimeout(() => {
    timers.pop();
    update([12, 5, 6, 6, 9, 10]);
  }, 7000));

  const interval = setInterval(() => {
    update([10, 2, 7, 4, 50, 20, 42, 24, 6, 4, 36, 8]);

    timers.unshift(setTimeout(() => {
      timers.pop();
      update([5, 7, 2, 6, 9]);
    }, 3000));

    timers.unshift(setTimeout(() => {
      timers.pop();
      update([12, 5, 6, 6, 9, 10]);
    }, 6000));
  }, 9500);
  
  useEffect(() => {
    drawGraph();

    return () => {
      if (interval) clearInterval(interval);
      timers.forEach(timer => clearTimeout(timer));
    };
  });

  return (
    <div style={{ display: 'flex' }}>
      <svg id="legend-animated" />
      <div id="legend-animated-container" />
    </div>
  );
};

export default Legend;
