import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calc-container">
        <div className="calc-display">0</div>
        <button type="button" className="gray-btn">AC</button>
        <button type="button" className="gray-btn">+/-</button>
        <button type="button" className="gray-btn">%</button>
        <button type="button" className="orange-btn">/</button>
        <button type="button" className="gray-btn">7</button>
        <button type="button" className="gray-btn">8</button>
        <button type="button" className="gray-btn">9</button>
        <button type="button" className="orange-btn">*</button>
        <button type="button" className="gray-btn">4</button>
        <button type="button" className="gray-btn">5</button>
        <button type="button" className="gray-btn">6</button>
        <button type="button" className="orange-btn">-</button>
        <button type="button" className="gray-btn">1</button>
        <button type="button" className="gray-btn">2</button>
        <button type="button" className="gray-btn">3</button>
        <button type="button" className="orange-btn">+</button>
        <button type="button" className="gray-btn zero-btn">0</button>
        <button type="button" className="gray-btn">.</button>
        <button type="button" className="orange-btn">=</button>
      </div>
    );
  }
}

export default Calculator;