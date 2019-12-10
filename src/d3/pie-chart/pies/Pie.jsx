import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Pie = () => {
  const timers = [];

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const currentAngles = [];
  const radius = Math.min(width, height) / 2 - 20;
  const graphEnd = Math.PI * 2;

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  const pie = d3.pie()
    .value(d => d)
    .sort(null);

  const arcTween = (d, i) => {
    const interpolate = d3.interpolate(currentAngles[i], d);
    currentAngles[i] = interpolate(1);
    return t => arc(interpolate(t));
  };

  const arcTweenRemove = (d) => {
    const end = { ...d, startAngle: graphEnd, endAngle: graphEnd };
    const interpolate = d3.interpolate(d, end);
    return t => arc(interpolate(t));
  };
  
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3.select('#pie-animated')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${(width / 2) + margin.left}, ${(height / 2) + margin.top})`);

    const colour = d3.scaleLinear()
      .domain(d3.extent(data))
      .range(['#d1e2f3', '#023858']);

    svg.selectAll('.slice')
      .data(pie(data))
      .enter()
      .append('path')
        .attr('class', 'slice')
        .attr('d', arc)
        .each(d => { currentAngles[d.index] = d })
        .attr('fill', d => colour(d.value))
        .attr('stroke', 'black')
        .style('stroke-width', '2px')
        .style('opacity', 0.7);
  };

  const update = (data) => {
    const svg = d3.select('#pie-animated').select('g');

    const colour = d3.scaleLinear()
      .domain(d3.extent(data))
      .range(['#d1e2f3', '#023858']);
      
    const dataReady = pie(data);

    svg.selectAll('.slice')
      .data(dataReady)
      .exit()
      .transition()
      .duration(2000)
      .attrTween('d', arcTweenRemove)
      .attr('fill', '#d1e2f3')
      .remove();

    svg.selectAll('.slice')
      .data(dataReady)
      .transition()
      .duration(2000)
      .attrTween('d', arcTween)
      .attr('fill', d => colour(d.value));

    svg.selectAll('.slice')
      .data(dataReady)
      .enter()
      .append('path')
        .attr('class', 'slice')
        .attr('d', d => {
          currentAngles[d.index] = { ...d, startAngle: graphEnd, endAngle: graphEnd };
          return arc(currentAngles[d.index]);
        })
        .attr('fill', '#d1e2f3')
        .attr('stroke', 'black')
        .style('stroke-width', '2px')
        .style('opacity', 0.7)
        .transition()
        .duration(2000)
        .attrTween('d', arcTween)
        .attr('fill', d => colour(d.value));
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

  return <svg id="pie-animated" />
};

export default Pie;
