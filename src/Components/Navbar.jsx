import React from 'react';
import '../CSS/Navbar.css';
import search from '../Icons/Search icon.png';
import bell from '../Icons/Vector.png';
import mask from '../Icons/Mask Group.png';

const Navbar = () => {
  return (
       
    <div className='navbar-container'>
        <div className="header-navbar">
            Dashboard
        </div>
        <div className="content-navbar">
            <p className='search-bar'>
                <input type="text" name="search" placeholder='Search...'/>
                <img src={search} alt="search icon" />
            </p>
            <i><img src={bell} alt=""  /></i>
            <i><img src={mask} alt=""  /></i>
            
        </div>
    
    </div>

  )
}

export default Navbar;