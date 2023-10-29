import React from 'react';
import './App.css'; // Importing a CSS file for styling
import Navigation from './components/Navigation'; // Importing the Navigation component
import SearchBar from './components/SearchBar'; // Importing the SearchBar component
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      <Navigation /> {/* Render the Navigation component */}
      <SearchBar /> {/* Render the SearchBar component */}
      <UserCard/>
    </div>
  );
}

export default App;
