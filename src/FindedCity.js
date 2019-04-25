import React from 'react';

const FindedCity = ({ city, onClick }) => {
  return (
    <li onClick={() => onClick(city.id)}>
      {city.name}, {city.sys.country}: {Math.round(city.main.temp - 273.15)}&deg;C
    </li>
  );
}

export default FindedCity;
