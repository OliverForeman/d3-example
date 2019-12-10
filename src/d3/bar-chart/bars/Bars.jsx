import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Bars = () => {
  // Stores timeout IDs to be cleared on component unmount
  const timers = [];

  const margin = { top: 20, right: 20, bottom: 40, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // Does the initial drawing of the graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Create a colour scale for the bars
    const colour = d3.scaleLinear()
      .domain([1, d3.max(data)])
      .range(['#d1e2f3', '#023858']);

    // Create a scaling for the x axis
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, width])
      .paddingInner(0.08);

    // Create a scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // Setup the canvas
    const svg = d3.select('#bars')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Draw initial bars
    svg.selectAll('rect')
      .data(data) // The starting data set
      .enter() // Start adding new data points for any not currently mapped
      .append('rect') // Append a rect element (a bar for the chart)
      .attr('x', (_, i) => xScale(i)) // Position on the x axis according to the scaling
      .attr('y', d => yScale(d)) // Position on the y axis according to the scaling
      .attr('width', xScale.bandwidth()) // Set the bar width to an even amount
      .attr('height', d => height - yScale(d)) // Set the height of the bar according to the scaling
      .attr('fill', d => colour(d)); // Colour bar according to data value
  };

  // Used to update the bars of the graph
  const update = data => {
    const svg = d3.select('#bars').select('g');

    // Update the colour scale for the new data
    const colour = d3.scaleLinear()
      .domain([1, d3.max(data)])
      .range(['#d1e2f3', '#023858']);

    // Update the scaling with the new data
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, width])
      .paddingInner(0.08);

    // Update the scaling with the new data
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    // Handle removal of excess bars e.g. old dataset had 10 elements and new dataset has 5, we need to remove 5 bars from the canvas
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .exit() // Start handling any data not in the new dataset
      .transition() // Start a transition for all attributes listed below
      .duration(500) // Time in ms for transition to last
      .attr('fill', 'whitesmoke') // Change colour to match background
      .remove(); // Remove the element from the canvas

    // Handle update of existing bars
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .transition() // Start a transition for all attributes before next transition
      .duration(750) // Time in ms for transition
      .attr('y', d => yScale(d)) // Set position on y axis according to scaling
      .attr('height', d => height - yScale(d)) // Set bar height according to scaling
      .attr('fill', d => colour(d)) // Colour the bar according to the data value
      .transition() // Start a new transition for next set of attributes
      .duration(750) // Time in ms for this transition
      .delay(500) // Time in ms to delay the start of the transition
      .attr('x', (_, i) => xScale(i)) // Set the position on the x axis according to scaling
      .attr('width', xScale.bandwidth()); // Set the bar width to an even amount

    // Handle adding new bars e.g. old dataset had 5 elements and new dataset has 10, we need to add 5 new bars
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .enter() // Start adding new data points for any not currently mapped
      .append('rect') // Append a rect element (a bar for the chart)
      .attr('x', (_, i) => xScale(i)) // Set the position on the x axis according to scaling
      .attr('y', height) // Set the position on the y axis to be the bottom of the graph
      .attr('width', xScale.bandwidth()) // Set the bar width to an even amount
      .transition() // Start a transition for the next set of attributes
      .duration(750) // Time in ms for this transition
      .delay(1750) // Time in ms to delay the start of the transition
      .attr('y', d => yScale(d)) // Set the position on the y axis according to scaling
      .attr('height', d => height - yScale(d)) // Set the height of the bar according to scaling
      .attr('fill', d => colour(d)); // Set the colour according to the data value
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
  
  useEffect(() => {
    drawGraph();

    return () => {
      if (interval) clearInterval(interval);
      timers.forEach(timer => clearTimeout(timer));
    };
  });

  return <svg id="bars" />;
};

export default Bars;
