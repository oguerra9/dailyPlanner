const router = require('express').Router();
const axios = require('axios');
const WeatherAPI = require('../../helpers/weatherAPI');

router.get('/', async (req, res) => {
    let currWeatherData = await WeatherAPI.getCurrWeatherData();
    let coord = 'lat=' + currWeatherData.coord.lat + '&lon=' + currWeatherData.coord.lon;
    console.log(`coords = ${coord}`);
    let forecastData = await WeatherAPI.getForecast(coord);
    res.status(200).json(forecastData);
});


module.exports = router;