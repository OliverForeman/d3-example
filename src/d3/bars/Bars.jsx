import React, { useEffect } from 'react';
import * as d3 from 'd3';

const Bars = () => {
  useEffect(() => {
    drawGraph();
  });

  const width = 960;
  const height = 500;

  // Does the initial drawing of the graph
  const drawGraph = () => {
    const data = [12, 5, 6, 6, 9, 10];

    // Create a scaling for the x axis
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, width])
      .paddingInner(0.08);

    // Create a scaling for the y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 50]);

    // Setup the canvas
    const svg = d3.select('#bars')
      .attr('width', width)
      .attr('height', height);

    // Draw initial bars
    svg.selectAll('rect')
      .data(data) // The starting data set
      .enter() // Start adding new data points for any not currently mapped
      .append('rect') // Append a rect element (a bar for the chart)
      .attr('x', (d, i) => xScale(i)) // Position on the x axis according to the scaling
      .attr('y', d => yScale(d)) // Position on the y axis according to the scaling
      .attr('width', xScale.bandwidth()) // Set the bar width to an even amount
      .attr('height', d => height - yScale(d)) // Set the height of the bar according to the scaling
      .attr('fill', d => `rgb(0, 0, ${d * 10})`); // Colour bar according to data value
  };

  // Used to update the bars of the graph
  const update = data => {
    const svg = d3.select('#bars');

    // Update the scaling with the new data
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, width])
      .paddingInner(0.08);

    // Update the scaling with the new data
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 50]);

    // Handle removal of excess bars e.g. old dataset had 10 elements and new dataset has 5, we need to remove 5 bars from the canvas
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .exit() // Start handling any data not in the new dataset
      .transition() // Start a transition for all attributes listed below
      .duration(500) // Time in ms for transition to last
      .attr('fill', 'white') // Change colour to white
      .remove(); // Remove the element from the canvas

    // Handle update of existing bars
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .transition() // Start a transition for all attributes before next transition
      .duration(750) // Time in ms for transition
      .attr('y', d => yScale(d)) // Set position on y axis according to scaling
      .attr('height', d => height - yScale(d)) // Set bar height according to scaling
      .attr('fill', d => `rgb(0, 0, ${d * 10})`) // Colour the bar according to the data value
      .transition() // Start a new transition for next set of attributes
      .duration(750) // Time in ms for this transition
      .delay(500) // Time in ms to delay the start of the transition
      .attr('x', (d, i) => xScale(i)) // Set the position on the x axis according to scaling
      .attr('width', xScale.bandwidth()); // Set the bar width to an even amount

    // Handle adding new bars e.g. old dataset had 5 elements and new dataset has 10, we need to add 5 new bars
    svg.selectAll('rect')
      .data(data) // Apply the new dataset
      .enter() // Start adding new data points for any not currently mapped
      .append('rect') // Append a rect element (a bar for the chart)
      .attr('x', (d, i) => xScale(i)) // Set the position on the x axis according to scaling
      .attr('y', height) // Set the position on the y axis to be the bottom of the graph
      .attr('width', xScale.bandwidth()) // Set the bar width to an even amount
      .transition() // Start a transition for the next set of attributes
      .duration(750) // Time in ms for this transition
      .delay(1750) // Time in ms to delay the start of the transition
      .attr('y', d => yScale(d)) // Set the position on the y axis according to scaling
      .attr('height', d => height - yScale(d)) // Set the height of the bar according to scaling
      .attr('fill', d => `rgb(0, 0, ${d * 10})`); // Set the colour according to the data value
  };

  // Updata data set after 1 second, increases data points
  setTimeout(() => {
    update([10, 2, 7, 4, 50, 20, 51, 24, 6, 4, 9, 8]);
  }, 1000);

  // Update data set after 4 seconds, 3 seconds after first update, reduces data points
  setTimeout(() => {
    update([5, 7, 2, 6, 9]);
  }, 4000);

  return <svg id="bars" />;
};

export default Bars;
