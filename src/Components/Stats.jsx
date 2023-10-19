import React from 'react';
import '../CSS/Stats.css';
import revenue from '../Icons/revenue.png';
import transaction from '../Icons/trans.png';
import likes from '../Icons/likes.png';
import users from '../Icons/users.png';

const Stats = () => {
  return (
    <div className='stats-container'>
        <div className="stat">
            <i><img src={revenue} alt="icon" /></i>
            <p>Total Revenues</p>
            <span>
                <p>$2,129</p>
                <p>+2.5%</p>
            </span>
        </div>

        <div className="stat">
            <i><img src={transaction} alt="icon" /></i>
            <p>Total Transaction</p>
            <span>
                <p>1,520</p>
                <p>+1.7%</p>
            </span>
        </div>

        <div className="stat">
            <i><img src={likes} alt="icon" /></i>
            <p>Total Likes</p>
            <span>
                <p>9,721</p>
                <p>+1.4%</p>
            </span>
        </div>

        <div className="stat">
            <i><img src={users} alt="icon" /></i>
            <p>Total Users</p>
            <span>
                <p>9,721</p>
                <p>+4.2%</p>
            </span>
        </div>
        {/* <div className="stat"></div>
        <div className="likes"></div>
        <div className="users"></div> */}
    </div>
  )
}

export default Stats;