import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
function Calculator() {
  const [calcObject, setCalcObject] = useState({});

  function handleClick(e) {
    setCalcObject({ ...calcObject, ...calculate(calcObject, e.target.textContent) });
  }

  const { next, total } = calcObject;

  const buttonNames = [
    'AC', '+/-', '%', '÷', '7', '8', '9', 'x',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];

  const btnClass = (i) => ((((i + 1) % 4 === 0) || i === 18) ? 'orange-btn' : 'gray-btn');

  return (
    <div className="container page-border">
      <h2>Let&apos;s do some math!</h2>
      <div className="calc-container">
        <div className="calc-display">{next || total || 0}</div>
        {buttonNames.map((name, i) => (
          <button key={i.toString()} type="button" onClick={handleClick} className={btnClass(i)}>
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
