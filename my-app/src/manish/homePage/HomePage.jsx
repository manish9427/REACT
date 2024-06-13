import React from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className='home-container'>
      <h1 className='home-title'>Product Page</h1>
      <ul className='home-list'>
        <li><Link className='home-link' to="/counter">Counter</Link></li>
        <li><Link className='home-link' to="/timer">Timer</Link></li>
        <li><Link className='home-link' to="/stopwatch">StopWatch</Link></li>
        <li><Link className='home-link' to="/fakestore">FakeStore</Link></li>
        <li><Link className='home-link' to="/todo">Todo</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;