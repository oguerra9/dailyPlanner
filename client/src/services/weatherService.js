import http from "../http-common.js";

class WeatherService {
    
    getCurrWeather() {
        console.log(`[WeatherService]: getCurrWeather() called`);
        return http.get("/weather/current");
    }

    getCurrWeatherGen() {
        console.log(`[WeatherService]: getCurrWeatherGen() called`);
        return http.get("/weather/current/general");
    }

    getTodayTemp() {
        console.log(`[WeatherService]: getTodayTemp() called`);
        return http.get("/weather/current/temp");
    }

    getTodayWind() {
        console.log(`[WeatherService]: getTodayWind() called`);
        return http.get("/weather/current/wind");
    }

    getTodaySys() {
        console.log(`[WeatherService]: getTodaySys() called`);
        return http.get("/weather/current/sys");
    }

    getForecast() {
        console.log(`[WeatherService]: getForecast() called`);
        return http.get("/weather/forecast");
    }

    getHourlyForcast() {
        console.log(`[WeatherService]: getHourlyForecast() called`);
        return http.get("/weather/forecast/hourly");
    }

    getDailyForecast() {
        console.log(`[WeatherService]: getDailyForecast() called`);
        return http.get("/weather/forecast/daily");
    }


}

let WS = new WeatherService();

export default WS;