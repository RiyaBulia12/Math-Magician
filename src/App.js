import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation-menu">
          <h1 className="app-title">Math Magicians</h1>
          <ul className="menu-list">
            <li id="list"> Home </li>
            <li> | </li>
            <li id="create">Calculator</li>
            <li> | </li>
            <li id="contact">Quote </li>
          </ul>
        </nav>
        <React.StrictMode>
          <Router>
            <Home />
          </Router>
        </React.StrictMode>

      </header>
    </div>
  );
}

export default App;
