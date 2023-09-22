import React, { useState } from 'react'
import './KevinsApp.scss'

export default function KevinsApp() {
  const [count, setCount] = useState(0) // this is the state\
  const [variable, setVariable] = useState(1);

  return (
    <div className='kevins-app box-border'>
      <Counter count={count} />
      
      <div className='button-container box-border'>
        <AddSubtractButton setCount={setCount} operation='subtract' value={2} />
        <ModifyValueInput variable={variable} setVariable={setVariable} setCount={setCount} />
        <AddSubtractButton setCount={setCount} operation='add' />
      </div>
    </div>
  )
}

function Counter(props) {
  const { count } = props;

  return (
    <div className='counter box-border'>
      {count}
    </div>
  )
}

function AddSubtractButton(props) {
  const { setCount, operation, value = 1 } = props;

  let modifier = 0;

  if (operation === 'add') modifier = value;
  else if (operation === 'subtract') modifier = -value;

  function handleClick() {
    setCount((prevCount) => prevCount + modifier)
  }

  return (
    <button className='button box-border' onClick={handleClick}>
      {modifier > 0 ? '+' : ''}{modifier}
    </button>
  )
}

function ModifyValueInput(props) {
  const { variable, setVariable, setCount } = props;

  function handleChange(val) {
    setVariable(prevVariable => prevVariable + val);
  }

  function handleSend() {
    setCount((prevCount) => prevCount + variable);
  }

  return (
    <div className='value-modifier-group'>
      <button className='button button__subtract' onClick={() => handleChange(-1)}>
        -
      </button>
      <button className='button button__send' onClick={handleSend}>
        {variable}
      </button>
      <button className='button button__add' onClick={() => handleChange(1)}>
        +
      </button>
    </div>
  )
}