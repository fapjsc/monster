import React from 'react';
import './SearchBar.css';

const searchBar = ({ placeholder, handleSearch }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleSearch}
  />
);

export default searchBar;
