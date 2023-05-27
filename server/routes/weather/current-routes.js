const router = require('express').Router();
const axios = require('axios');
const WeatherAPI = require('../../helpers/weatherAPI');

router.get('/', async (req, res) => {
    let weatherData = await WeatherAPI.getCurrWeatherData();
    res.status(200).json(weatherData);
});

module.exports = router;