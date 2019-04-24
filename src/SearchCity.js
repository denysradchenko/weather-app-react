import React from 'react';
import './SearchCity.css';

const SearchCity = ({ onChange, onSubmit, city }) => {
  return (
    <form action="" className="form" onSubmit={onSubmit}>
      <input type="text" value={city} onChange={onChange} name="cityToSearch" placeholder="Search city" className="city-input form-control" />
    </form>
  );
}

export default SearchCity;
