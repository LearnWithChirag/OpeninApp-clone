import React from 'react';
import '../CSS/Dashboard.css';
import Navbar from './Navbar';
import Stats from './Stats';
import Activities from './Activities';
import Products from './Products';
import Profile from './Profile';

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Navbar />
        <Stats />
        <Activities />
        <div className='flex'>
        <Products />
        <Profile />
        </div>
    </div>
  )
}

export default Dashboard;