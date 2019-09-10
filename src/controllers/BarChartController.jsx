import React, { useState } from 'react';
import BarsStatic from '../d3/bars/BarsStatic';
import Bars from '../d3/bars/Bars';
import AxisStatic from '../d3/axis/AxisStatic';
import Axis from '../d3/axis/Axis';
import GraphStatic from '../d3/graph/GraphStatic';
import Graph from '../d3/graph/Graph';
import GraphInteractive from '../d3/graph/GraphInteractive';
import useInputForm from '../utilities/useInputForm';

const BarChartController = () => {
  const textInput = useInputForm(0);
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('axis-static');

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

  return (
    <>
      <div className="display-control">
        <button type="button" value="axis-static" onClick={e => setSelectedOption(e.target.value)}>Axis Static</button>
        <button type="button" value="axis-animated" onClick={e => setSelectedOption(e.target.value)}>Axis Animated</button>
        <button type="button" value="bars-static" onClick={e => setSelectedOption(e.target.value)}>Bars Static</button>
        <button type="button" value="bars-animated" onClick={e => setSelectedOption(e.target.value)}>Bars Animated</button>
        <button type="button" value="graph-static" onClick={e => setSelectedOption(e.target.value)}>Graph Static</button>
        <button type="button" value="graph-animated" onClick={e => setSelectedOption(e.target.value)}>Graph Animated</button>
        <button type="button" value="graph-interactive" onClick={e => setSelectedOption(e.target.value)}>Graph Interactive</button>
      </div>
      <hr />
      <div className="display-content">
        {selectedOption === 'axis-static' && <AxisStatic />}
        {selectedOption === 'axis-animated' && <Axis />}
        {selectedOption === 'bars-static' && <BarsStatic />}
        {selectedOption === 'bars-animated' && <Bars />}
        {selectedOption === 'graph-static' && <GraphStatic />}
        {selectedOption === 'graph-animated' && <Graph />}
        {selectedOption === 'graph-interactive' && <GraphInteractive data={data} />}
      </div>
      <hr />
      <div className="display-interactions">
        <form>
          <input type="number" {...textInput} />
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
