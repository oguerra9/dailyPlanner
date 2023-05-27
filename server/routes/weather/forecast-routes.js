const router = require('express').Router();
const axios = require('axios');
const WeatherAPI = require('../../helpers/weatherAPI');

router.get('/', async (req, res) => {
    let forecastData = await WeatherAPI.getForecast();
    res.status(200).json(forecastData);
});

// [{dt, temp, feels_like, pressure, humidity, dew_point, uvi, clouds, visibility, wind_speed, wind_deg, wind_gust, weather: [{id, main, description, icon}], pop}, … (48 hours)]
router.get('/hourly', async (req, res) => {
    let forecastData = await WeatherAPI.getForecast();
    let hourlyData = forecastData.hourly;
    res.status(200).json(hourlyData);
});

// [{dt, sunrise, sunset, moonrise, moonset, moon_phase, temp: {day, min, max, night, eve, morn}, feels_like: {day, night, eve, morn}, pressure, humidity, dew_point, wind_speed, wind_deg, wind_gust, weather: [{id, main, description, icon}], clouds, pop, uvi},… (8 days)]
router.get('/daily', async (req, res) => {
    let forecastData = await WeatherAPI.getForecast();
    let dailyData = forecastData.daily;
    res.status(200).json(dailyData);
});


module.exports = router;