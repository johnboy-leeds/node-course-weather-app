const request = require('request');

const WEATHER_STACK_API_KEY = 'b4f8967ef95a2d2160aa1566ddb14ce2';

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${WEATHER_STACK_API_KEY}&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather API");
      return;
    }
  
  
    if (response.body.error) {
      callback("Unable to find location");
      return;
    }

    const { precip, temperature, feelslike } = response.body.current;
    callback(undefined, `It is currently ${temperature} degrees out, it feels like ${feelslike}. There is a ${precip}% chance of rain.`);
  })
}

module.exports = forecast;
