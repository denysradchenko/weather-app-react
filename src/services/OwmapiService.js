export default class OwmapiService {
  _apiBase = 'https://api.openweathermap.org/data/2.5/';
  _apiKey = '&appid=3896a8bb4786c47feaa1f4d2396297d2';

  async getResource(url, type) {
    const res = await fetch(`${this._apiBase}${type}?${url}${this._apiKey}`);
    return await res.json();
  }

  async getWeatherByCityName(cityName) {
    const res = await this.getResource(`q=${cityName}`, 'forecast');
    return this._transformWeather(res);
  }

  async getWeatherByCityId(cityId) {
    const res = await this.getResource(`id=${cityId}`, 'forecast')
    return this._transformWeather(res);
  }

  async findCity(cityName) {
    const res = await this.getResource(`q=${cityName}`, 'find');
    return res;
  }

  _transformWeather({
    city = null,
    list = null,
    cod
  }) {
    let weather;
    if (list) {
      weather = Array.from(list).map(el => {
        return {
          date: el.dt_txt,
          datetmsp: el.dt,
          temp: el.main.temp,
          humidity: el.main.humidity,
          pressure: el.main.pressure,
          description: el.weather[0].description,
          icon: el.weather[0].icon,
          wind: el.wind.speed,
          timeofday: el.sys.pod
        }
      })
    }

    return {
      city,
      weather,
      response: parseInt(cod),
    }
  }
}
