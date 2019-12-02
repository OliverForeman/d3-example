import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Graph = () => {
  useEffect(() => {
    drawGraph();

    return () => {
      if (interval) clearInterval(interval);
      timers.forEach(timer => clearTimeout(timer));
    };
  });

  // Stores timeout IDs to be cleared on component unmount
  const timers = [];

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Select a translated graphics tag for drawing the elements within
    const svg = d3.select('#bars-graph')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Create a colour scale for the bars
    const colour = d3.scaleLinear()
      .domain([1, d3.max(data)])
      .range(['#d1e2f3', '#023858']);

    // SCALES

    // Create a scaling for the x axis
    const xScale = d3.scaleBand()
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
      .attr('class', 'xAxis') // Add a class so we can select it later
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale)
        .ticks(data.length) // Give the approximate number of ticks to be drawn
      );

    // Create the y axis
    svg.append('g')
      .attr('class', 'yAxis') // Add a class so we can select it later
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
      .attr('x', (_, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth()) // Gives the bars an equal width
      .attr('height', d => height - yScale(d))
      .attr('fill', d => colour(d)); // Set colour according to data value
  };

  // Used to update the entire bar chart
  const update = data => {
    const svg = d3.select('#bars-graph').select('g');

    // Update the colour scale for the new data
    const colour = d3.scaleLinear()
      .domain([1, d3.max(data)])
      .range(['#d1e2f3', '#023858']);

    // SCALES

    // Update the x axis scaling for the new data
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([0, width])
      .paddingInner(0.05)
      .paddingOuter(0.05);

    // Update the y axis scaling for the new data
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // AXIS

    // Update the x axis
    svg.select('.xAxis')
      .transition() // Start a transition for the given duration
      .duration(750)
      .delay(500)
      .call(d3.axisBottom(xScale) // Draw with the new scaling
        .ticks(data.length) // Update the number of ticks to display
      );

    // Update the y axis
    svg.select('.yAxis')
      .transition() // Start a transition for the given duration
      .duration(750)
      .delay(1250)
      .call(d3.axisLeft(yScale)); // Draw with the new scaling

    // BARS

    // Handle the removal of removed data points/bars
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .exit() // Start handling data points not in the new dataset
      .transition() // Start a transition for the given duration
      .duration(500)
      .attr('fill', 'whitesmoke')
      .remove(); // Remove the element from the canvas

    // Handle the update of existing data points/bars
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .transition() // Start another transition for the given duration, starting after the delay
      .duration(750)
      .delay(500)
      .attr('x', (_, i) => xScale(i))
      .attr('width', xScale.bandwidth())
      .transition() // Start a transition for the given duration
      .duration(750)
      .attr('y', d => yScale(d))
      .attr('height', d => height - yScale(d))
      .attr('fill', d => colour(d));

    // Handle the adding of new data points/bars
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .enter() // Start handling the new data points
      .append('rect') // Add new rect elements for the new data values
      .attr('x', (_, i) => xScale(i))
      .attr('y', height)
      .attr('width', xScale.bandwidth())
      .transition()
      .duration(750)
      .delay(1250)
      .attr('y', d => yScale(d))
      .attr('height', d => height - yScale(d))
      .attr('fill', d => colour(d));
  };

  // Update the data set, increases data points
  timers.unshift(setTimeout(() => {
    timers.pop();
    update([10, 2, 7, 4, 50, 20, 42, 24, 6, 4, 36, 8]);
  }, 1000));

  // Update the data set, reduces data points
  timers.unshift(setTimeout(() => {
    timers.pop();
    update([5, 7, 2, 6, 9]);
  }, 4000));

  // Return to the original data set
  timers.unshift(setTimeout(() => {
    timers.pop();
    update([12, 5, 6, 6, 9, 10]);
  }, 7000));

  // Runs the animation on a loop
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

  return <svg id="bars-graph" />
};

export default Graph;
