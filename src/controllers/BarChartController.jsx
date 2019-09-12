import React, { useState } from 'react';
import kebabToWords from '../utilities/kebabToWords';
import AxisStatic from '../d3/axis/AxisStatic';
import Axis from '../d3/axis/Axis';
import BarsStatic from '../d3/bar-chart/bars/BarsStatic';
import Bars from '../d3/bar-chart/bars/Bars';
import GraphStatic from '../d3/bar-chart/graph/GraphStatic';
import Graph from '../d3/bar-chart/graph/Graph';
import GraphInteractive from '../d3/bar-chart/graph/GraphInteractive';
import DisplayInteractions from '../reusable/DisplayInteractions';

const BarChartController = () => {
  const graphTypes = ['axis-static', 'axis-animated', 'bars-static', 'bars-animated', 'graph-static', 'graph-animated', 'graph-interactive'];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);
  const [data, setData] = useState([]);

  const getButtonClassName = graphType => `display-control-button${graphType === selectedOption ? ' selected' : ''}`;

  const createOptionButton = graphType => (
    <button key={graphType} type="button" className={getButtonClassName(graphType)} value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
  );

  const getComponent = () => {
    switch (selectedOption) {
      case 'axis-static': return <AxisStatic />;
      case 'axis-animated': return <Axis />;
      case 'bars-static': return <BarsStatic />;
      case 'bars-animated': return <Bars />;
      case 'graph-static': return <GraphStatic />;
      case 'graph-animated': return <Graph />;
      case 'graph-interactive': return <GraphInteractive data={data} />;
      default: return <AxisStatic />;
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
      <DisplayInteractions shouldDisplay={selectedOption === 'graph-interactive'} data={data} setData={setData} />
    </>
  );
};

export default BarChartController;
