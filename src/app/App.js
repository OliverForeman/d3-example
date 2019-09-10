import React, { useState } from 'react';
import './App.css';
import BarChartController from '../controllers/BarChartController';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('bar-chart');

  return (
    <>
      <div className="display-container">
        {selectedOption === 'bar-chart' && <BarChartController />}
        {selectedOption === 'line-graph'}
      </div>
      <div className="graph-control">
        <button type="button" value="bar-chart" onClick={e => setSelectedOption(e.target.value)}>Bar Chart</button>
        <button type="button" value="line-graph" onClick={e => setSelectedOption(e.target.value)}>Line Graph</button>
      </div>
    </>
  );
};

export default App;
