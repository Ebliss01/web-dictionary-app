import React from 'react';
import SearchIcon from '../assets/iconoir_search.svg';
import '../css/SearchBar.css';

const SearchBar = () => {

  return (
    <div className='group16'>
      <input type="text" placeholder='Word Search' />
      <img className='iconoir_search'
      src={SearchIcon} alt="Search Icon" />
    </div>
  );
}

export default SearchBar;
