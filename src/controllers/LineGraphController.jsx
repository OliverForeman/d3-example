import React, { useState } from 'react';
import kebabToWords from '../utilities/kebabToWords';
import LinesStatic from '../d3/line-graph/lines/LinesStatic';
import Lines from '../d3/line-graph/lines/Lines';
import LinesEntrance from '../d3/line-graph/lines/LinesEntrance';
import GraphStatic from '../d3/line-graph/graph/GraphStatic';

const LineGraphController = () => {
  const graphTypes = ['lines-static', 'lines-entrance', 'lines-animated', 'graph-static'];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);

  const createOptionButton = graphType => (
    <button key={graphType} type="button" value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
  );

  const getComponent = () => {
    switch (selectedOption) {
      case 'lines-static': return <LinesStatic />;
      case 'lines-entrance': return <LinesEntrance />;
      case 'lines-animated': return <Lines />;
      case 'graph-static': return <GraphStatic />
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
      <hr />
    </>
  );
};

export default LineGraphController;
