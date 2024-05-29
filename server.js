const express = require('express');
const app = express();
const port = 3000;

app.get('/weather/today', (req, res) => {
    const weatherData = {
        status: 'Partly Cloudy',
        temperature: 32, // Average temperature in Khulna for a typical day
        probabilityOfRain: 0.2, // 20% chance of rain
        windSpeed: 10, // in km/h, light breeze
        highestTemperature: 35, // in Celsius
        lowestTemperature: 28, // in Celsius
        humidity: 0.80, // 80% humidity, typical for Khulna
        hourlyForecast: [
            { hour: '00:00', temperature: 29, probabilityOfRain: 0.05, windSpeed: 5, humidity: 0.85, status: 'clear' },
            { hour: '01:00', temperature: 28, probabilityOfRain: 0.05, windSpeed: 6, humidity: 0.86, status: 'clear' },
            // Add additional hours as needed
            { hour: '23:00', temperature: 30, probabilityOfRain: 0.1, windSpeed: 7, humidity: 0.84, status: 'cloudy' }
        ]
    };

    res.json(weatherData);
});

app.get('/weather/tomorrow', (req,res) => {
    const weatherData = {
        status: 'Mostly Sunny',
        temperature: 33, 
        probabilityOfRain: 0.1, // 10% chance of rain
        windSpeed: 12, // in km/h, gentle breeze
        highestTemperature: 36, 
        lowestTemperature: 27, 
        humidity: 0.75, 
        forecast: [
            { day: 'Mon', status: 'sunny', highestTemperature: 36, lowestTemperature: 27, probabilityOfRain: 0.1 },
            { day: 'Tue', status: 'partly cloudy', highestTemperature: 35, lowestTemperature: 28, probabilityOfRain: 0.2 },
            // Add additional days as needed
            { day: 'Sun', status: 'cloudy', highestTemperature: 34, lowestTemperature: 29, probabilityOfRain: 0.15 }
        ]
    };
    res.json(weatherData);
});

app.listen(port, () => {
    console.log('hello');
});