import React, { useState, useEffect } from 'react';
import WeatherService from '../services/weatherService';

export default function WeatherContainer() {

    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getWeatherData();
    }, []);

    const getWeatherData = () => {
        (WeatherService.getCurrWeather()).then((response) => {
            setWeatherData(response.data);
            setLoading(false);
        });
    };

    if (isLoading) {
        return (<div>Loading...</div>);
    }
    
    return (
        <div style={{'border':'1px solid pink'}}>
            <strong>{weatherData.name}</strong>
            <p>current weather = {weatherData.weather[0].main} - {weatherData.weather[0].description}</p>
            <p>current temp = {weatherData.main.temp}</p>
            <p>feels like = {weatherData.main.feels_like}</p>
            <p>today's low: {weatherData.main.temp_min}</p>
            <p>today's high: {weatherData.main.temp_max}</p>
            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} />
        </div>
    );

}