import React, { useState } from 'react';
import BarsStatic from '../d3/bars/BarsStatic';
import Bars from '../d3/bars/Bars';
import AxisStatic from '../d3/axis/AxisStatic';
import Axis from '../d3/axis/Axis';
import GraphStatic from '../d3/graph/GraphStatic';
import Graph from '../d3/graph/Graph';
import GraphInteractive from '../d3/graph/GraphInteractive';
import withController from '../utilities/withController/withController';
import useInputForm from '../utilities/useInputForm';

const App = () => {
  const textInput = useInputForm(0);
  const [data, setData] = useState([]);

  const BarsController = withController('Bars', [{ label: 'Static', ControlledComponent: BarsStatic }, { label: 'Dynamic', ControlledComponent: Bars }]);
  const AxisController = withController('Axis', [{ label: 'Static', ControlledComponent: AxisStatic }, { label: 'Dynamic', ControlledComponent: Axis }]);
  const GraphController = withController('Graph', [{ label: 'Static', ControlledComponent: GraphStatic }, { label: 'Dynamic', ControlledComponent: Graph }, { label: 'Interactive', ControlledComponent: GraphInteractive, data: data }]);

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
    <div>
      <form>
        <input type="number" {...textInput} />
        <button type="submit" onClick={addNumberHandler}>Add</button>
        <button type="button" onClick={addRandomNumber}>Add Random</button>
        <button type="button" onClick={addRandomNumbers}>Add <i>X</i> Random</button>
        <button type="button" onClick={removeNumberHandler}>Remove</button>
        <button type="button" onClick={removeAllHandler}>Remove All</button>
        <button type="button" onClick={clearHandler}>Clear</button>
      </form>
      <GraphInteractive data={data} />
      <BarsController />
      <AxisController />
      {/* <GraphController /> */}
    </div>
  );
};

export default App;
