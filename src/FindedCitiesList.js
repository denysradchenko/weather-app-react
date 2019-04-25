import React from 'react';
import FindedCity from './FindedCity';
import './FindedCitiesList.css';

const FindedCitiesList = ({ list, onClick }) => {
  const cityList = list.map((el) => {
    return <FindedCity key={el.id} city={el} onClick={onClick} />
  })
  return (
    <ul className="FindedCitiesList">{cityList[0]}</ul>
  );
}

export default FindedCitiesList;
