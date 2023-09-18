import React, { useState } from 'react';
import countriesData from './countries.json';
import './CountrySearch.css';

function CountrySearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundCountry, setFoundCountry] = useState(null);

  const handleSearch = () => {
    const country = countriesData.find(
      (country) => country.name === searchTerm
    );

    if (country) {
      setFoundCountry(country);
    } else {
      setFoundCountry(null);
    }
  };

  return (
    <div className="container">
      <h1>Country Search</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Enter a country"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {foundCountry ? (
        <div>
          <h2>{foundCountry.name}</h2>
          <p>Country Code: {foundCountry.code}</p>
        </div>
      ) : (
        <p>No country found!</p>
      )}
    </div>
  );
}

export default CountrySearch;
