import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Quote = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <div className="container">
          <h2 className="quote">
            Mathematics is not about numbers, equations, computations, or algorithms
            It is about understanding. - William Paul Thurston
          </h2>
        </div>
      )}
    />
  </Routes>
);
export default Quote;
