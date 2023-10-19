import React from 'react';
import '../CSS/Sidebar.css';
import dashboard from '../Icons/dashboard_icon.png';
import transaction from '../Icons/transaction_icon.png';
import schedules from '../Icons/schedule_icon.png';
import users from '../Icons/user_icon.png';
import settings from '../Icons/setting_icon.png';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="sidebar">

        <div className="header-sidebar">
            <h4>Board.</h4>
        </div>
        <div className="content-sidebar">
            <span>
            <img src={dashboard} alt="dashboard icon" />
            <a href="/">Dashboard</a>
            </span>

            <span>
            <img src={transaction} alt="dashboard icon" />
            <a href="/">Transactions</a>
            </span>
            <span>
            <img src={schedules} alt="dashboard icon" />
            <a href="/">Schedules</a>
            </span>

            <span>
            <img src={users} alt="dashboard icon" />
            <a href="/">Users</a>
            </span>

            <span>
            <img src={settings} alt="dashboard icon" />
            <a href="/">Settings</a>
            </span>

        </div>
        </div>

        <div className="footer-sidebar">
            <a href="/">Help</a>
            <a href="/">Contact Us</a>
        </div>
    </div>
  )
}

export default Sidebar;