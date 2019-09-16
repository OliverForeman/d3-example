import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import arrayEquals from '../../../utilities/arrayEquals';

const GraphInteractive = ({ data }) => {
  const [oldScale, setOldScale] = useState(() => () => null);
  const [oldData, setOldData] = useState([]);

  useEffect(() => {
    drawGraph();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!arrayEquals(data, oldData)) {
      setOldData(data);
      update(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const drawGraph = () => {
    const svg = d3.select('#lines-graph-interactive')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    setOldScale(() => xScale)

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    svg.append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale)
        .ticks(data.length)
      );

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

    svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 3.0);
  };

  const update = data => {
    const svg = d3.select('#lines-graph-interactive').select('g');

    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    svg.select('.xAxis')
      .transition()
      .duration(1000)
      .delay(500)
      .call(d3.axisBottom(xScale)
        .ticks(data.length)
      );

    svg.select('.yAxis')
      .transition()
      .duration(2000)
      .delay(2000)
      .call(d3.axisLeft(yScale));

    const line = d3.line()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    const lineFlatOldScale = d3.line()
      .x((d, i) => oldScale(i))
      .y(height)
      .curve(d3.curveMonotoneX);

    const lineFlatNewScale = d3.line()
      .x((d, i) => xScale(i))
      .y(height)
      .curve(d3.curveMonotoneX);

    svg.select('.line')
      .transition()
      .duration(1000)
      .attr('d', lineFlatOldScale)
      .selection()
      .datum(data)
      .transition()
      .duration(0)
      .delay(1000)
      .attr('d', lineFlatNewScale)
      .transition()
      .duration(2000)
      .delay(1000)
      .attr('d', line);

    svg.selectAll('circle')
      .data(data)
      .exit()
      .transition()
      .duration(750)
      .attr('r', 0)
      .remove();

    svg.selectAll('circle')
      .data(data)
      .transition()
      .duration(750)
      .attr('r', 0)
      .selection()
      .transition()
      .duration(0)
      .delay(750)
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', height)
      .transition()
      .duration(750)
      .delay(250)
      .attr('r', 5)
      .transition()
      .duration(2000)
      .delay(250)
      .attr('cy', d => yScale(d));

    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
        .attr('cx', (d, i) => xScale(i))
        .attr('cy', height)
        .attr('r', 0)
        .transition()
        .duration(750)
        .delay(1000)
        .attr('r', 5)
        .transition()
        .duration(2000)
        .delay(250)
        .attr('cy', d => yScale(d));

    setOldScale(() => xScale)
  };

  return <svg id="lines-graph-interactive" />
};

export default GraphInteractive;
