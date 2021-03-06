import React, { useState } from 'react';
import kebabToWords from '../utilities/kebabToWords';
import LegendStatic from '../d3/pie-chart/legend/LegendStatic';
import Legend from '../d3/pie-chart/legend/Legend';
import PieStatic from '../d3/pie-chart/pies/PieStatic';
import Pie from '../d3/pie-chart/pies/Pie';
import PieInteractive from '../d3/pie-chart/pies/PieInteractive';
import DisplayInteractions from '../reusable/DisplayInteractions';

const PieChartController = () => {
  const graphTypes = ['legend-static', 'legend-animated', 'pie-static', 'pie-animated', 'pie-interactive'];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);
  const [data, setData] = useState([]);

  const getButtonClassName = graphType => `display-control-button${graphType === selectedOption ? ' selected': ''}`;

  const createOptionButton = graphType => (
    <button key={graphType} type="button" className={getButtonClassName(graphType)} value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
  );

  const getComponent = () => {
    switch (selectedOption) {
      case 'legend-static': return <LegendStatic />;
      case 'legend-animated': return <Legend />;
      case 'pie-static': return <PieStatic />;
      case 'pie-animated': return <Pie />;
      case 'pie-interactive': return <PieInteractive data={data} />;
      default: return <LegendStatic />;
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
      <DisplayInteractions shouldDisplay={selectedOption === 'pie-interactive'} data={data} setData={setData} />
    </>
  );
};

export default PieChartController;
