import React from 'react';
import BarsStatic from '../d3/bars/BarsStatic';
import Bars from '../d3/bars/Bars';
import AxisStatic from '../d3/axis/AxisStatic';
import Axis from '../d3/axis/Axis';
import GraphStatic from '../d3/graph/GraphStatic';
import Graph from '../d3/graph/Graph';
import withController from '../withController/withController';

const App = () => {
  const BarsController = withController('Bars', [{ label: 'Static', ControlledComponent: BarsStatic }, { label: 'Dynamic', ControlledComponent: Bars }]);
  const AxisController = withController('Axis', [{ label: 'Static', ControlledComponent: AxisStatic }, { label: 'Dynamic', ControlledComponent: Axis }]);
  const GraphController = withController('Graph', [{ label: 'Static', ControlledComponent: GraphStatic }, { label: 'Dynamic', ControlledComponent: Graph }]);

  return (
    <div>
      <BarsController />
      <AxisController />
      <GraphController />
    </div>
  );
};

export default App;
