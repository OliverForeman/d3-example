import React, { useState } from 'react';
import kebabToWords from '../utilities/kebabToWords';
import useInputForm from '../utilities/useInputForm';
import AxisStatic from '../d3/axis/AxisStatic';
import Axis from '../d3/axis/Axis';
import BarsStatic from '../d3/bar-chart/bars/BarsStatic';
import Bars from '../d3/bar-chart/bars/Bars';
import GraphStatic from '../d3/bar-chart/graph/GraphStatic';
import Graph from '../d3/bar-chart/graph/Graph';
import GraphInteractive from '../d3/bar-chart/graph/GraphInteractive';

const BarChartController = () => {
  const textInput = useInputForm(0);
  const graphTypes = ['axis-static', 'axis-animated', 'bars-static', 'bars-animated', 'graph-static', 'graph-animated', 'graph-interactive'];
  const [selectedOption, setSelectedOption] = useState(graphTypes[0]);
  const [data, setData] = useState([]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const addNumberHandler = event => {
    event.preventDefault();
    setData([...data, textInput.value]);
  };

  const addRandomNumber = () => {
    setData([...data, getRandomInt(1, 51)]);
  };

  const addRandomNumbers = () => {
    const updatedData = [...data];
    for (let i = 0; i < textInput.value; i += 1) updatedData.push(getRandomInt(1, 51));
    setData(updatedData);
  };

  const removeNumberHandler = () => {
    const updatedData = [...data];
    const index = updatedData.findIndex(value => value === textInput.value);
    if (index > -1) updatedData.splice(index, 1);

    setData(updatedData);
  };

  const removeAllHandler = () => {
    const updatedData = [...data].reduce((acc, value) => {
      if (value !== textInput.value) acc.push(value);
      return acc;
    }, []);

    setData(updatedData);
  };

  const clearHandler = () => {
    setData([]);
  };

  const createOptionButton = graphType => (
    <button key={graphType} type="button" value={graphType} onClick={() => setSelectedOption(graphType)}>{kebabToWords(graphType)}</button>
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

  const displayInteractionsClass = `display-interactions${selectedOption === 'graph-interactive' ? '' : ' hide'}`;

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
      <div className={displayInteractionsClass}>
        <form>
          <input type="number" min="0" {...textInput} />
          <button type="submit" onClick={addNumberHandler}>Add</button>
          <button type="button" onClick={addRandomNumber}>Add Random</button>
          <button type="button" onClick={addRandomNumbers}>Add <i>X</i> Random</button>
          <button type="button" onClick={removeNumberHandler}>Remove</button>
          <button type="button" onClick={removeAllHandler}>Remove All</button>
          <button type="button" onClick={clearHandler}>Clear</button>
        </form>
      </div>
    </>
  );
};

export default BarChartController;
