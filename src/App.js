import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Calculator from './pages/CalculatorMain';
import Quote from './pages/Quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation-menu">
          <h1 className="app-title">Math Magicians</h1>
          <ul className="menu-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li> | </li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li> | </li>
            <li><Link to="/quote">Quote</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
