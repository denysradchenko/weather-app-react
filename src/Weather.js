import React from 'react';
import Forecast from './Forecast';

const Weather = ({ weather }) => {
  const forecasts = weather.map(forecast => {
    return <Forecast key={forecast.dt} forecast={forecast} />
  })
  return (
    <div className="Weather">
      {forecasts}
    </div>
  );
}

export default Weather;
