import React from 'react';
import './App.css';
import Bars from '../d3/bars/Bars';
import Axis from '../d3/axis/Axis';
import Graph from '../d3/graph/GraphStatic';

function App() {
  return (
    <div className="App">
      <Bars />
      <Axis />
      <Graph />
    </div>
  );
}

export default App;
