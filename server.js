const express = require('express');
const app = express();
const port = 3000;

app.get('/weather/today', (req, res) => {
    const weatherData = {
        status: 'Partly Cloudy',
        temperature: 30, // in Celsius
        probabilityOfRain: 0.4, // 40%
        windSpeed: 15, // in km/h
        highestTemperature: 32, // in Celsius
        lowestTemperature: 26, // in Celsius
        humidity: 0.85, // 85%
        hourlyForecast: [
            { hour: '00:00', temperature: 26, probabilityOfRain: 0.3, windSpeed: 12, humidity: 0.85, status: 'cloudy' },
            { hour: '01:00', temperature: 26, probabilityOfRain: 0.3, windSpeed: 12, humidity: 0.86, status: 'cloudy' },
            { hour: '02:00', temperature: 25, probabilityOfRain: 0.3, windSpeed: 13, humidity: 0.87, status: 'cloudy' },
            { hour: '03:00', temperature: 25, probabilityOfRain: 0.4, windSpeed: 14, humidity: 0.88, status: 'cloudy' },
            { hour: '04:00', temperature: 25, probabilityOfRain: 0.4, windSpeed: 14, humidity: 0.89, status: 'cloudy' },
            { hour: '05:00', temperature: 25, probabilityOfRain: 0.4, windSpeed: 15, humidity: 0.90, status: 'cloudy' },
            { hour: '06:00', temperature: 25, probabilityOfRain: 0.4, windSpeed: 15, humidity: 0.91, status: 'cloudy' },
            { hour: '07:00', temperature: 26, probabilityOfRain: 0.5, windSpeed: 16, humidity: 0.92, status: 'partly_cloudy' },
            { hour: '08:00', temperature: 27, probabilityOfRain: 0.5, windSpeed: 17, humidity: 0.92, status: 'partly_cloudy' },
            { hour: '09:00', temperature: 28, probabilityOfRain: 0.5, windSpeed: 17, humidity: 0.92, status: 'partly_cloudy' },
            { hour: '10:00', temperature: 29, probabilityOfRain: 0.4, windSpeed: 18, humidity: 0.93, status: 'partly_cloudy' },
            { hour: '11:00', temperature: 30, probabilityOfRain: 0.4, windSpeed: 18, humidity: 0.93, status: 'partly_cloudy' },
            { hour: '12:00', temperature: 31, probabilityOfRain: 0.3, windSpeed: 18, humidity: 0.94, status: 'partly_cloudy' },
            { hour: '13:00', temperature: 32, probabilityOfRain: 0.3, windSpeed: 19, humidity: 0.94, status: 'partly_cloudy' },
            { hour: '14:00', temperature: 32, probabilityOfRain: 0.3, windSpeed: 19, humidity: 0.94, status: 'partly_cloudy' },
            { hour: '15:00', temperature: 32, probabilityOfRain: 0.2, windSpeed: 18, humidity: 0.94, status: 'partly_cloudy' },
            { hour: '16:00', temperature: 32, probabilityOfRain: 0.2, windSpeed: 18, humidity: 0.93, status: 'partly_cloudy' },
            { hour: '17:00', temperature: 31, probabilityOfRain: 0.2, windSpeed: 17, humidity: 0.93, status: 'partly_cloudy' },
            { hour: '18:00', temperature: 30, probabilityOfRain: 0.2, windSpeed: 17, humidity: 0.92, status: 'partly_cloudy' },
            { hour: '19:00', temperature: 29, probabilityOfRain: 0.3, windSpeed: 16, humidity: 0.92, status: 'cloudy' },
            { hour: '20:00', temperature: 28, probabilityOfRain: 0.3, windSpeed: 16, humidity: 0.92, status: 'cloudy' },
            { hour: '21:00', temperature: 27, probabilityOfRain: 0.3, windSpeed: 15, humidity: 0.91, status: 'cloudy' },
            { hour: '22:00', temperature: 27, probabilityOfRain: 0.3, windSpeed: 15, humidity: 0.91, status: 'cloudy' },
            { hour: '23:00', temperature: 26, probabilityOfRain: 0.3, windSpeed: 14, humidity: 0.90, status: 'cloudy' }
        ]
    };

    res.json(weatherData);
});

app.get('/weather/tomorrow', (req, res) => {
    const weatherData = {
        status: 'Partly Cloudy',
        temperature: 31, // in Celsius
        probabilityOfRain: 0.3, // 30%
        windSpeed: 16, // in km/h
        highestTemperature: 33, // in Celsius
        lowestTemperature: 25, // in Celsius
        humidity: 0.80, // 80%
        forecast: [
            { day: 'Mon', status: 'sunny', highestTemperature: 34, lowestTemperature: 25, probabilityOfRain: 0.2 },
            { day: 'Tue', status: 'partly cloudy', highestTemperature: 33, lowestTemperature: 25, probabilityOfRain: 0.3 },
            { day: 'Wed', status: 'rainy', highestTemperature: 31, lowestTemperature: 24, probabilityOfRain: 0.5 },
            { day: 'Thu', status: 'thunderstorm', highestTemperature: 30, lowestTemperature: 23, probabilityOfRain: 0.7 },
            { day: 'Fri', status: 'rainy', highestTemperature: 32, lowestTemperature: 24, probabilityOfRain: 0.4 },
            { day: 'Sat', status: 'partly cloudy', highestTemperature: 33, lowestTemperature: 25, probabilityOfRain: 0.3 },
            { day: 'Sun', status: 'sunny', highestTemperature: 35, lowestTemperature: 26, probabilityOfRain: 0.2 }
        ]
    };
    res.json(weatherData);
});

app.listen(port, () => {
    console.log(`Weather server running at http://localhost:${port}`);
});
