import React, { Component } from 'react';
import './App.css';
import SearchCity from './SearchCity';
import Weather from './Weather';
import OwmapiService from './services/OwmapiService';
import FindedCitiesList from './FindedCitiesList';

class App extends Component {
  state = {
    cityNameToSearch: '',
    cityIdToShow: null,
    citylist: [],
    city: null,
    weather: null,
    response: null
  }

  owmapiService = new OwmapiService();

  handleInputTextField = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
    this.owmapiService
      .findCity(target.value)
      .then(({ list }) => {
        this.setState({ citylist: list || [] })
      })
  }

  handleForm = (e) => {
    e.preventDefault();
    this.owmapiService
      .getWeatherByCityName(this.state.cityNameToSearch)
      .then(({ city, weather, response }) => {
        this.setState({ city, weather, response })
      })
    this.setState({
      cityNameToSearch: '',
      citylist: []
    })
  }

  handleClickList = (cityId) => {
    this.owmapiService
      .getWeatherByCityId(cityId)
      .then(({ city, weather, response }) => {
        this.setState({ city, weather, response })
      })
    this.setState({
      cityNameToSearch: '',
      citylist: []
    })
  }

  render() {
    const { cityNameToSearch, response, weather, city, citylist } = this.state;
    return (
      <>
        <SearchCity onChange={this.handleInputTextField} city={cityNameToSearch} onSubmit={this.handleForm} />
        {citylist.length > 0 ? <FindedCitiesList list={citylist} onClick={this.handleClickList} /> : null}
        {response === 200 ? <Weather weather={weather} city={city} /> : null}
      </>
    );
  }
}

export default App;
