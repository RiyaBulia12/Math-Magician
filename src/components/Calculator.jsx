import './Calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  // create initial state which includes a calc object
  // and the second one is a function that is used for updating the calc state.
  const [calc, setCalc] = useState({ total: null, operation: null, next: null });

  const onClickHandler = (e) => {
    // setCalc is same as setState; used to update the calc object when changes occur
    setCalc(calculate(calc, e.target.innerHTML));
  };

  return (
    <div className="calc-container">
      <span className="answer">{calc.next || calc.total || 0}</span>
      <div className="col">
        <button type="button" className="btn" onClick={onClickHandler}>AC</button>
        <button type="button" className="btn" onClick={onClickHandler}>+/-</button>
        <button type="button" className="btn" onClick={onClickHandler}>%</button>
        <button type="button" className="btn last-col" onClick={onClickHandler}>÷</button>
      </div>
      <div className="col">
        <button type="button" className="btn" onClick={onClickHandler}>7</button>
        <button type="button" className="btn" onClick={onClickHandler}>8</button>
        <button type="button" className="btn" onClick={onClickHandler}>9</button>
        <button type="button" className="btn last-col" onClick={onClickHandler}>x</button>
      </div>
      <div className="col">
        <button type="button" className="btn" onClick={onClickHandler}>4</button>
        <button type="button" className="btn" onClick={onClickHandler}>5</button>
        <button type="button" className="btn" onClick={onClickHandler}>6</button>
        <button type="button" className="btn last-col" onClick={onClickHandler}>-</button>
      </div>
      <div className="col">
        <button type="button" className="btn" onClick={onClickHandler}>1</button>
        <button type="button" className="btn" onClick={onClickHandler}>2</button>
        <button type="button" className="btn" onClick={onClickHandler}>3</button>
        <button type="button" className="btn last-col" onClick={onClickHandler}>+</button>
      </div>
      <div className="col">
        <button type="button" className="btn zero" onClick={onClickHandler}>0</button>
        <button type="button" className="btn dot" onClick={onClickHandler}>.</button>
        <button type="button" className="btn last-col" onClick={onClickHandler}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
