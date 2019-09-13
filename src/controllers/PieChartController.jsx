import React, { useState } from 'react';
import kebabToWords from '../utilities/kebabToWords';

const PieChartController = () => {
  const graphTypes = [];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);

  const getButtonClassName = graphType => `display-control-button${graphType === selectedOption ? ' selected': ''}`;

  const createOptionButton = graphType => (
    <button key={graphType} type="button" className={getButtonClassName(graphType)} value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
  );

  const getComponent = () => {
    switch (selectedOption) {
      
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
