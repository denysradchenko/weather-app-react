import React from 'react';

const CityTips = ({ city }) => {
  const { name, country } = city;
  return (
    <div>{name},{country}</div>
  );
}

export default CityTips;
