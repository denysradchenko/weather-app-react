import React from 'react';
import icoImgs from './Icons';

const FindedCity = ({ city, onClick }) => {
  const icoIndex = ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d', '01n', '02n', '03n', '04n', '09n', '10n', '11n', '13n'];

  const icoImg = icoImgs[icoIndex.indexOf(city.weather[0].icon)];

  const description = city.weather[0].description;

  return (
    <li onClick={() => onClick(city.id)}>
      {city.name}, {city.sys.country}: {Math.round(city.main.temp - 273.15)}&deg;C
      <img src={icoImg} alt={description} title={description} />
    </li>
  );
}

export default FindedCity;
