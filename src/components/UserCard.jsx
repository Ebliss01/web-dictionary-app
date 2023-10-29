import React from 'react';
import AudioIcon from '../assets/Group 4.svg';
import '../css/UserCard.css';
import RectangleIcon from '../assets/Rectangle.svg';

const UserCard = () => {
  return (
    <div className='group17'>
      <div className='group15'>
        <div className='group18'>
          <p className='text-1'>Dashboard</p>
          <p className='text-2'>/ˈkiːbɔːd/</p>
        </div>

        <img className='group4'
        src={AudioIcon} alt="Audio Icon" />
      </div>

      <div className='group14'>
        <div className='group2'>
          <p className='text-3'>noun</p>
          {/* <img className='rectangle-icon' 
          src={RectangleIcon} alt="Rectangle Icon" /> */}

          <div className='group11'>
            <p className='text-4'>meaning</p>

          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default UserCard;
