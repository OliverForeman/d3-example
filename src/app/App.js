import React, { useState } from 'react';
import './App.css';
import kebabToWords from '../utilities/kebabToWords';
import BarChartController from '../controllers/BarChartController';
import LineGraphController from '../controllers/LineGraphController';

const App = () => {
  const graphTypes = ['bar-chart', 'line-graph'];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);

  const getComponent = () => {
    switch (selectedOption) {
      case 'bar-chart': return <BarChartController />;
      case 'line-graph': return <LineGraphController />;
      default: return <BarChartController />;
    }
  };

  const getButtonClassName = graphType => `display-control-button main-chart-control${graphType === selectedOption ? ' selected' : ''}`;

  const createOptionButton = graphType => (
    <button key={graphType} type="button" className={getButtonClassName(graphType)} value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
  );

  return (
    <>
      <div className="display-container">
        {getComponent()}
      </div>
      <div className="graph-control">
        {graphTypes.map(createOptionButton)}
      </div>
    </>
  );
};

export default App;
