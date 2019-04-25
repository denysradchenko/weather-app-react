import React from 'react';
import Forecast from './Forecast';
import './Weather.css'

const Weather = ({ weather, city }) => {
  const forecasts = weather.map(forecast => {
    return <Forecast key={forecast.datetmsp} forecast={forecast} />
  })
  return (
    <div className="Weather">
      <h1 className="city-name-country">{city.name}, {city.country}</h1>
      {forecasts}
    </div>
  );
}

export default Weather;
