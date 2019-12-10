import React from 'react';
import PropTypes from 'prop-types';
import useInputForm from '../utilities/useInputForm';
import getRandomInt from '../utilities/getRandomInt';

const DisplayInteractions = ({ shouldDisplay, data, setData }) => {
  const textInput = useInputForm(0);
  
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

  const displayInteractionsClass = `display-interactions${shouldDisplay ? '' : ' hide'}`;

  return (
    <div className={displayInteractionsClass}>
      <form>
        <input type="number" min="0" value={textInput.value} onChange={textInput.onChange} />
        <button type="submit" onClick={addNumberHandler}>Add</button>
        <button type="button" onClick={addRandomNumber}>Add Random</button>
        <button type="button" onClick={addRandomNumbers}>Add <i>X</i> Random</button>
        <button type="button" onClick={removeNumberHandler}>Remove</button>
        <button type="button" onClick={removeAllHandler}>Remove All</button>
        <button type="button" onClick={clearHandler}>Clear</button>
      </form>
    </div>
  );
};

DisplayInteractions.propTypes = {
  shouldDisplay: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  setData: PropTypes.func.isRequired
};

export default DisplayInteractions;
