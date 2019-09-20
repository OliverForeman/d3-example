import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

const PieInteractive = ({ data }) => {
  useEffect(() => {
    drawGraph();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    update(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const [currentAngles] = useState([]);
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
    const end = Object.assign({}, d, { startAngle: graphEnd, endAngle: graphEnd });
    const interpolate = d3.interpolate(d, end);
    return t => arc(interpolate(t));
  };

  const drawGraph = () => {
    d3.select('#pie-interactive')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);
  };

  const update = (data) => {
    const svg = d3.select('#pie-interactive').select('g');

    const colour = d3.scaleLinear()
      .domain([1, d3.max(data)])
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
          currentAngles[d.index] = Object.assign({}, d, { startAngle: graphEnd, endAngle: graphEnd });
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

  return <svg id="pie-interactive" />
};

export default PieInteractive;
