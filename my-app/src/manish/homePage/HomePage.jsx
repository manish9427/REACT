import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/timer">Timer</Link></li>
        <li><Link to="/stopwatch">StopWatch</Link></li>
        <li><Link to="/fakestore">FakeStore</Link></li>
        <li><Link to="/todo">Todo</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;