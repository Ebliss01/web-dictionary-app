import React from 'react'
import BookIcon from '../assets/iconoir_book.svg';
import Path3Icon from '../assets/Path 3.svg';
import GroupIcon from '../assets/Group_icon.svg';
import '../css/Navigation.css';

const Navigation = () => {
  return (
    <div className='group10'>
      <img className='book-icon'
      src={BookIcon} alt="Book Icon" />

      <div className='group13'>
      <p className='text'>san serrif</p>
      <img className='path3-icon'
      src={Path3Icon} alt="Path3 Icon" />
      </div>

      <img className='group-icon'
      src={GroupIcon} alt="Group Icon" />
      
    </div>
  );
}

export default Navigation;
