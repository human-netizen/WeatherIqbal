const express = require('express');
const app = express();
const port = 3000;

app.get('/weather/today', (req, res) => {
    const weatherData = {
        status: 'Mostly Cloudy',
        temperature: 35, // in Celsius
        probabilityOfRain: 0.9, // 90%
        windSpeed: 200, // in km/h
        highestTemperature: 30, // in Celsius
        lowestTemperature: 18, // in Celsius
        humidity: 0.95, // 95%
        hourlyForecast: [
            { hour: '00:00', temperature: 18, probabilityOfRain: 0.1, windSpeed: 10, humidity: 0.80, status: 'cloudy' },
            { hour: '01:00', temperature: 17, probabilityOfRain: 0.1, windSpeed: 12, humidity: 0.82, status: 'cloudy' },
            { hour: '02:00', temperature: 17, probabilityOfRain: 0.2, windSpeed: 14, humidity: 0.83, status: 'cloudy' },
            { hour: '03:00', temperature: 16, probabilityOfRain: 0.3, windSpeed: 13, humidity: 0.84, status: 'rainy' },
            { hour: '04:00', temperature: 16, probabilityOfRain: 0.4, windSpeed: 15, humidity: 0.85, status: 'rainy' },
            { hour: '05:00', temperature: 15, probabilityOfRain: 0.5, windSpeed: 14, humidity: 0.86, status: 'storm' },
            { hour: '06:00', temperature: 15, probabilityOfRain: 0.6, windSpeed: 13, humidity: 0.87, status: 'storm' },
            { hour: '07:00', temperature: 16, probabilityOfRain: 0.7, windSpeed: 12, humidity: 0.88, status: 'cloudy' },
            { hour: '08:00', temperature: 17, probabilityOfRain: 0.8, windSpeed: 11, humidity: 0.89, status: 'cloudy' },
            { hour: '09:00', temperature: 18, probabilityOfRain: 0.9, windSpeed: 10, humidity: 0.90, status: 'cloudy' },
            { hour: '10:00', temperature: 19, probabilityOfRain: 0.9, windSpeed: 9, humidity: 0.91, status: 'cloudy_sunny' },
            { hour: '11:00', temperature: 20, probabilityOfRain: 0.8, windSpeed: 8, humidity: 0.92, status: 'cloudy_sunny' },
            { hour: '12:00', temperature: 21, probabilityOfRain: 0.7, windSpeed: 7, humidity: 0.93, status: 'cloudy_sunny' },
            { hour: '13:00', temperature: 22, probabilityOfRain: 0.6, windSpeed: 6, humidity: 0.94, status: 'sun' },
            { hour: '14:00', temperature: 23, probabilityOfRain: 0.5, windSpeed: 5, humidity: 0.95, status: 'sun' },
            { hour: '15:00', temperature: 24, probabilityOfRain: 0.4, windSpeed: 4, humidity: 0.96, status: 'sun' },
            { hour: '16:00', temperature: 25, probabilityOfRain: 0.3, windSpeed: 3, humidity: 0.97, status: 'sun' },
            { hour: '17:00', temperature: 26, probabilityOfRain: 0.2, windSpeed: 2, humidity: 0.98, status: 'sun' },
            { hour: '18:00', temperature: 27, probabilityOfRain: 0.1, windSpeed: 1, humidity: 0.99, status: 'sun' },
            { hour: '19:00', temperature: 26, probabilityOfRain: 0.2, windSpeed: 2, humidity: 0.98, status: 'cloudy_sunny' },
            { hour: '20:00', temperature: 25, probabilityOfRain: 0.3, windSpeed: 3, humidity: 0.97, status: 'cloudy_sunny' },
            { hour: '21:00', temperature: 24, probabilityOfRain: 0.4, windSpeed: 4, humidity: 0.96, status: 'cloudy' },
            { hour: '22:00', temperature: 23, probabilityOfRain: 0.5, windSpeed: 5, humidity: 0.95, status: 'cloudy' },
            { hour: '23:00', temperature: 22, probabilityOfRain: 0.6, windSpeed: 6, humidity: 0.94, status: 'cloudy' }
        ]
    };

    res.json(weatherData);
});


app.get('/weather/tomorrow', (req,res)=>{
    const weatherData = {
        status: 'Mostly Cloudy',
        temperature: 35, 
        probabilityOfRain: 0.9, 
        windSpeed: 200, 
        highestTemperature: 30, 
        lowestTemperature: 18, 
        humidity: 0.95, 
        forecast: [
            { day: 'Mon', status: 'sun', highestTemperature: 25, lowestTemperature: 18, probabilityOfRain: 0.3 },
            { day: 'Tue', status: 'cloudy', highestTemperature: 24, lowestTemperature: 17, probabilityOfRain: 0.4 },
            { day: 'Wed', status: 'rainy', highestTemperature: 22, lowestTemperature: 15, probabilityOfRain: 0.6 },
            { day: 'Thu', status: 'storm', highestTemperature: 20, lowestTemperature: 14, probabilityOfRain: 0.8 },
            { day: 'Fri', status: 'rainy', highestTemperature: 23, lowestTemperature: 16, probabilityOfRain: 0.5 },
            { day: 'Sat', status: 'cloudy_sunny', highestTemperature: 26, lowestTemperature: 19, probabilityOfRain: 0.3 },
            { day: 'Sun', status: 'sun', highestTemperature: 28, lowestTemperature: 20, probabilityOfRain: 0.2 }
        ]
    };
    res.json(weatherData);
});


app.listen(port, () => {
    console.log(`Weather server running at http://localhost:${port}`);
});
