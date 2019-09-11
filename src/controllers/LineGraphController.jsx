import React, { useState } from 'react';
import kebabToWords from '../utilities/kebabToWords';

const LineGraphController = () => {
  const graphTypes = ['line-static'];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);

  const createOptionButton = graphType => (
    <button key={graphType} type="button" value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
  );

  const getComponent = () => {
    switch (selectedOption) {
      case 'line-static': return <svg />;
      default: return <svg />;
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
