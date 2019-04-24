import React, { Component } from 'react';
import './App.css';
import SearchCity from './SearchCity';
import Weather from './Weather';
import OwmapiService from './services/OwmapiService';

class App extends Component {
  state = {
    cityToSearch: '',
    city: null,
    weather: null,
    response: null
  }

  owmapiService = new OwmapiService();

  handleInputTextField = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  handleForm = (e) => {
    e.preventDefault();
    this.owmapiService
      .getWeatherByCityName(this.state.cityToSearch)
      .then(({ city, weather, response }) => {
        this.setState({ city, weather, response })
      })
  }

  render() {
    return (
      <>
        <SearchCity onChange={this.handleInputTextField} city={this.state.cityToSearch} onSubmit={this.handleForm} />
        {this.state.response === 200 ? <Weather weather={this.state.weather} /> : null}
      </>
    );
  }
}

export default App;
