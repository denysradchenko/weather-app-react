export default class OwmapiService {
  _apiBase = 'https://api.openweathermap.org/data/2.5/forecast?';
  _apiKey = '&appid=3896a8bb4786c47feaa1f4d2396297d2';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}${this._apiKey}`);
    return await res.json();
  }

  async getWeatherByCityName(cityName) {
    const res = await this.getResource(`q=${cityName}`);
    return this._transformWeather(res);
  }

  async getWeatherByCityId(cityId) {
    const res = await this._apiBase.getResource(`id=${cityId}`)
    return this._transformWeather(res);
  }

  _transformWeather({
    city = null,
    list = null,
    cod
  }) {
    return {
      city,
      weather: list,
      response: parseInt(cod),
    }
  }
}
