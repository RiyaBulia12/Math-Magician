import './Calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
   constructor(props) {
      super(props);
      this.state = { total: null, operation: null, next: null };
      this.onClickHandler = this.onClickHandler.bind(this);
   }

   onClickHandler = (e) => {
      // Function will receive the previous state as the first argument
      this.setState((state) => calculate(state, e.target.innerHTML));
   }

   render() {
      // ESLINT: Enforce consistent usage of destructuring assignment of props, state, and context
      // Avoid using this.state.next or this.state.total for a good practice
      const { next, total, operation } = this.state;
      return (
         <div className="container">
            <span className="answer">{next || total || operation || 0}</span>
            <div className="col">
               <button type="button" className="btn" onClick={this.onClickHandler}>AC</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>+/-</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>%</button>
               <button type="button" className="btn last-col" onClick={this.onClickHandler}>÷</button>
            </div>
            <div className="col">
               <button type="button" className="btn" onClick={this.onClickHandler}>7</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>8</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>9</button>
               <button type="button" className="btn last-col" onClick={this.onClickHandler}>x</button>
            </div>
            <div className="col">
               <button type="button" className="btn" onClick={this.onClickHandler}>4</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>5</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>6</button>
               <button type="button" className="btn last-col" onClick={this.onClickHandler}>-</button>
            </div>
            <div className="col">
               <button type="button" className="btn" onClick={this.onClickHandler}>1</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>2</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>3</button>
               <button type="button" className="btn last-col" onClick={this.onClickHandler}>+</button>
            </div>
            <div className="col">
               <button type="button" className="btn zero" onClick={this.onClickHandler}>0</button>
               <button type="button" className="btn" onClick={this.onClickHandler}>•</button>
               <button type="button" className="btn last-col" onClick={this.onClickHandler}>=</button>
            </div>
         </div>
      );
   }
}

export default Calculator;
