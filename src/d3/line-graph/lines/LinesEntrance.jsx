import React, { useEffect } from 'react';
import * as d3 from 'd3';

const LinesEntrance = () => {
  useEffect(() => {
    drawGraph();

    return () => {
      if (interval) clearInterval(interval);
    };
  });

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Used to draw the graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Create the scaling for the x axis
    const xScale = d3.scaleLinear()
      .domain([0, data.length - 1]) // The range of values to be used for the scale
      .range([0, width]); // The positioning for the scale to range over

    // Create the scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)]) // The range of values to be used for the scale
      .range([height, 0]); // The positioning for the scale to range over

    // Setup the canvas
    const svg = d3.select('#lines-entrance')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Create a line generator for drawing to the canvas
    const line = d3.line()
      .x((_, i) => xScale(i)) // Position on the x axis according to array index
      .y(d => yScale(d)) // Position on the y axis according to the data value
      .curve(d3.curveMonotoneX); // Apply a curve algorithm for drawing the line

    // Draw dots at each data point
    svg.selectAll('circle')
      .data(data) // Apply the data set
      .enter() // Add new data points
      .append('circle') // Add a circle for each data point
        .attr('cx', (_, i) => xScale(i)) // Position on the x axis according to the array index
        .attr('cy', d => yScale(d)) // Position on the y axis according to the data value
        .transition() // Start a transition
        .duration(1000)
        .attr('r', 5); // Increase the radius so the circle grows

    // Draw the line on the canvas
    svg.append('path')
      .datum(data) // Apply the data set
      .attr('class', 'line') // Add a class to select later
      .attr('d', line) // Apply the line generator to the data
      .attr('fill', 'none') // Don't colour the space under/above the line
      .attr('stroke', 'black') // Set the colour of the line
      .attr('stroke-width', 3.0) // Set how thick the drawn line should be
      .attr('stroke-dasharray', svg.select('.line').node().getTotalLength()) // Makes the line dashed, dashes are set to the total length of the line so the line is still one whole
      .attr('stroke-dashoffset', svg.select('.line').node().getTotalLength()) // Offsets the dashes by the length of the line, makes the line appear to not be drawn
      .transition() // Start a transition
      .duration(2000)
      .delay(1000) // Run after the circles have finished animating
      .attr('stroke-dashoffset', 0); // Reduce the offset to 0 so that the line dash becomes totally visible
  };

  // Used to loop the animation
  const update = () => {
    const svg = d3.select('#lines-entrance').select('g');

    // Make the circles disappear and reappear again
    svg.selectAll('circle')
      .attr('r', 0) // No radius so the circles can't be seen
      .transition()
      .duration(1000)
      .attr('r', 5); // Increase the radius again to make the circles visible

    // Make the line disappear and reappear again
    svg.select('.line')
      .attr('stroke-dashoffset', svg.select('.line').node().getTotalLength()) // Increase stroke offset so the line disappears
      .transition()
      .duration(2000)
      .delay(1000)
      .attr('stroke-dashoffset', 0); // Reduce the stroke offset again so the line reappears
  };

  // Loops the animation
  const interval = setInterval(() => {
    update();
  }, 3750);

  return <svg id="lines-entrance" />
};

export default LinesEntrance;
