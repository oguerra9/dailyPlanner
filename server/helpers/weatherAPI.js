const axios = require('axios');
const SettingsAPI = require('./settingsAPI');
const WeatherAPI = {};
require('dotenv').config();

let weather_secret = process.env.WEATHER_TOKEN;

WeatherAPI.getCurrWeatherData = async () => {
    let cityName = await SettingsAPI.getLocationName();
    console.log(`getting current weather data for ${cityName}`);
    var weatherLink = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + weather_secret + '&units=imperial';
    try {
        const response = await axios.get(weatherLink);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

WeatherAPI.getForecast = async () => {
    let currWeatherData = await WeatherAPI.getCurrWeatherData();
    let coord = 'lat=' + currWeatherData.coord.lat + '&lon=' + currWeatherData.coord.lon;
    console.log(`coords = ${coord}`);
    var forecastLink = 'https://api.openweathermap.org/data/2.5/onecall?' + coord + '&appid=' + weather_secret + '&units=imperial';
    try {
        const response = await axios.get(forecastLink);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

module.exports = WeatherAPI;
