const router = require('express').Router();
const axios = require('axios');
const WeatherAPI = require('../../helpers/weatherAPI');

router.get('/', async (req, res) => {
    let weatherData = await WeatherAPI.getCurrWeatherData();
    res.status(200).json(weatherData);
});

// [{id, main, description, icon}]
router.get('/general', async (req, res) => {
    let weatherData = await WeatherAPI.getCurrWeatherData();
    let generalData = weatherData.weather;
    res.status(200).json(generalData);
});

// {temp, feels_like, temp_min, temp_max, pressure, humidity}
router.get('/temp', async (req, res) => {
    let weatherData = await WeatherAPI.getCurrWeatherData();
    let tempData = weatherData.main;
    res.status(200).json(tempData);
});

// {speed, deg, gust}
router.get('/wind', async (req, res) => {
    let weatherData = await WeatherAPI.getCurrWeatherData();
    let windData = weatherData.wind;
    res.status(200).json(windData);
});

// {type, id, country, sunrise, sunset}
router.get('/sys', async (req, res) => {
    let weatherData = await WeatherAPI.getCurrWeatherData();
    let sysData = weatherData.sys;
    res.status(200).json(sysData);
});

module.exports = router;