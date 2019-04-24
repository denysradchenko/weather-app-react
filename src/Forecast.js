import React from 'react';

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


  const date = new Date(forecast.dt_txt);
  const weekDay = getWeekDay(date.getDay());
  const monthDay = getMonthDay(date.getDate());
  const monthName = getMonthName(date.getMonth());
  const time = getTime(date.getHours(), date.getMinutes());
  return (
    <div className="forecast">
      {monthDay} {monthName} {time}, {weekDay}: {Math.round(forecast.main.temp - 273.15)}°C
    </div>
  );
}

export default Forecast;
