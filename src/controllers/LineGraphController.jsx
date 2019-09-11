import React, { useState } from 'react';
import kebabToWords from '../utilities/kebabToWords';
import LinesStatic from '../d3/line-graph/lines/LinesStatic';

const LineGraphController = () => {
  const graphTypes = ['lines-static'];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);

  const createOptionButton = graphType => (
    <button key={graphType} type="button" value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
  );

  const getComponent = () => {
    switch (selectedOption) {
      case 'lines-static': return <LinesStatic />;
      default: return <LinesStatic />;
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
    </>
  );
};

export default LineGraphController;
