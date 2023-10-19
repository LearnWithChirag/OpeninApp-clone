import React from 'react';
import '../index.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Homepage = () => {
  return (
    <div className="design">
      <Sidebar />
      <Dashboard />
      </div>
  )
}

export default Homepage;