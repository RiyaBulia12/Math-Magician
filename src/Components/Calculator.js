import './Calculator.css';
import React from 'react';

const Calculator = () => (
  <>
    <div className="container">
      <span className="answer">0</span>
      <div className="col">
        <button type="button" className="btn">AC</button>
        <button type="button" className="btn">+/-    </button>
        <button type="button" className="btn">%</button>
        <button type="button" className="btn last-col">÷</button>
      </div>
      <div className="col">
        <button type="button" className="btn">7</button>
        <button type="button" className="btn">8</button>
        <button type="button" className="btn">9</button>
        <button type="button" className="btn last-col">x</button>
      </div>
      <div className="col">
        <button type="button" className="btn">4</button>
        <button type="button" className="btn">5</button>
        <button type="button" className="btn">6</button>
        <button type="button" className="btn last-col">-</button>
      </div>
      <div className="col">
        <button type="button" className="btn">1</button>
        <button type="button" className="btn">2</button>
        <button type="button" className="btn">3</button>
        <button type="button" className="btn last-col">+</button>
      </div>
      <div className="col">
        <button type="button" className="btn zero">0</button>
        <button type="button" className="btn">•</button>
        <button type="button" className="btn last-col">=</button>
      </div>
    </div>
  </>
);

export default Calculator;
