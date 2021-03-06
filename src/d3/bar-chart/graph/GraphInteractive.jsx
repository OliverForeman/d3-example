import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const GraphInteractive = ({ data }) => {
  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3.select('#bars-graph-interactive')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(0)
      .range([0, width])
      .paddingInner(0.05)
      .paddingOuter(0.05);

    const yScale = d3.scaleLinear()
      .domain(0)
      .range([height, 0]);

    svg.append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('class', 'yAxis')
      .call(d3.axisLeft(yScale));

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
  }, [height, width, margin.top, margin.right, margin.bottom, margin.left]);

  useEffect(() => {
    const svg = d3.select('#bars-graph-interactive').select('g');

    const colour = d3.scaleLinear()
      .domain([1, d3.max(data)])
      .range(['#d1e2f3', '#023858']);

    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([0, width])
      .paddingInner(0.05)
      .paddingOuter(0.05);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    svg.select('.xAxis')
      .transition()
      .duration(750)
      .delay(500)
      .call(d3.axisBottom(xScale)
        .ticks(data.length)
      );

    svg.select('.yAxis')
      .transition()
      .duration(750)
      .delay(1250)
      .call(d3.axisLeft(yScale));

    svg.selectAll('rect')
      .data(data)
      .exit()
      .transition()
      .duration(500)
      .attr('fill', 'white')
      .remove();

    svg.selectAll('rect')
      .data(data)
      .transition()
      .duration(750)
      .delay(500)
      .attr('x', (_, i) => xScale(i))
      .attr('width', xScale.bandwidth())
      .transition()
      .duration(750)
      .attr('y', d => yScale(d))
      .attr('height', d => height - yScale(d))
      .attr('fill', d => colour(d));

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => xScale(i))
      .attr('y', height)
      .attr('width', xScale.bandwidth())
      .transition()
      .duration(750)
      .delay(1250)
      .attr('y', d => yScale(d))
      .attr('height', d => height - yScale(d))
      .attr('fill', d => colour(d));
  }, [data, height, width]);

  return <svg id="bars-graph-interactive" />
};

GraphInteractive.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default GraphInteractive;
