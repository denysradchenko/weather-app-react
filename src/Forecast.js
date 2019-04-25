import React from 'react';
import './Forecast.css';
import icoImgs from './Icons';

const Forecast = ({ forecast }) => {

  const getWeekDay = (day) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[day];
  }

  const getMonthDay = (monthDay) => {
    return monthDay < 10 ? `0${monthDay}` : monthDay;
  }

  const getMonthName = (month) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
  }

  const getTime = (h, m) => {
    const hours = h < 10 ? `0${h}` : h;
    const minutes = m < 10 ? `0${m}` : m;
    return `${hours}:${minutes}`;
  }

  const date = new Date(forecast.date);
  const weekDay = getWeekDay(date.getDay());
  const monthDay = getMonthDay(date.getDate());
  const monthName = getMonthName(date.getMonth());
  const time = getTime(date.getHours(), date.getMinutes());
  const classDayNight = forecast.timeofday === 'd' ? 'day-class' : 'night-class';

  const icoIndex = ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d', '01n', '02n', '03n', '04n', '09n', '10n', '11n', '13n'];

  return (
    <div className="forecast">
      <div className={classDayNight}>{monthDay} {monthName} {time}, {weekDay}</div>
      <img src={icoImgs[icoIndex.indexOf(forecast.icon)]} alt='' title='' />
      {Math.round(forecast.temp - 273.15)}&deg;C / Wind {forecast.wind} m/s
    </div>
  );
}

export default Forecast;
