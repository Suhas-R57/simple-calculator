import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {                       // eslint-disable-next-line
      const evalResult = eval(input); 
      setResult(evalResult);
      setInput('');
    } catch (error) {
      setResult('Error');
      setInput('');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <div>{input }</div>
        <div>{result}</div>
      </div>
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '='].map((button) => (
          <button key={button} onClick={() => button === '=' ? calculateResult() : handleButtonClick(button)}>
            {button}
          </button>
        ))}
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
};

export default App;

