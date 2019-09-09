import React, { useState } from 'react';
import './withController.css';

const withController = (title, componentList) => () => {
  const [selectedComponent, setSelectedComponent] = useState(componentList[0].label);
  
  const toggleSelectedComponent = event => {
    const value = event.target.value;
    setSelectedComponent(value);
  };

  const renderComponentOption = ({ label }) => (
    <button key={label} value={label} onClick={toggleSelectedComponent}>{label}</button>
  );

  const renderComponent = ({ label, ControlledComponent }) => (
    selectedComponent === label && <ControlledComponent key={label} />
  );

  return (
    <div className="controller-container">
      <div className="controller-option-panel">
        <h2>
          {title}
        </h2>
        {componentList.map(component => renderComponentOption(component))}
      </div>
      <hr />
      <div className="controller-component-container">
        {componentList.map(component => renderComponent(component))}
      </div>
    </div>
  );
};

export default withController;
