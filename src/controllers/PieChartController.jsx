import React, { useState } from 'react';
import kebabToWords from '../utilities/kebabToWords';
import PieStatic from '../d3/pie-chart/PieStatic';
import Pie from '../d3/pie-chart/Pie';

const PieChartController = () => {
  const graphTypes = ['pie-static', 'pie-animated'];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);

  const getButtonClassName = graphType => `display-control-button${graphType === selectedOption ? ' selected': ''}`;

  const createOptionButton = graphType => (
    <button key={graphType} type="button" className={getButtonClassName(graphType)} value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
  );

  const getComponent = () => {
    switch (selectedOption) {
      case 'pie-static': return <PieStatic />;
      case 'pie-animated': return <Pie />;
      default: return <PieStatic />;
    }
  };

  return (
    <>
      <div className="display-control">
        {graphTypes.map(createOptionButton)}
      </div>
      <hr />
      <div className="display-content">
        {getComponent()}
      </div>
      <hr />
    </>
  );
};

export default PieChartController;
