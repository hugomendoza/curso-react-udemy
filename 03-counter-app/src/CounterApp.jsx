import { useState } from "react";
import PropTypes from "prop-types";


export const CounterApp = ({value}) => {
  
  const [counter, setCounter] = useState(value)
  
  const handleApp = () => {
    // console.log(event)
    setCounter(counter + 1);
    // setCounter((c) => c + 1); //c is equal to counter
  };

  const handleSubstract = () => {
    // console.log(event)
    setCounter(counter - 1);
    // setCounter((c) => c + 1); //c is equal to counter
  };

  const handleReset = () => {
    // console.log(event)
    setCounter(value);
    // setCounter((c) => c + 1); //c is equal to counter
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button
        onClick={ handleApp }
      >
        +1
      </button>
      <button
        onClick={ handleSubstract }
      >
        -1
      </button>
      <button
        onClick={ handleReset }
      >
        Reset
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
