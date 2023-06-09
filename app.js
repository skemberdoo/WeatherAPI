const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Handle API requests
app.get('/weather/:location', async (req, res) => {
  const { location } = req.params;

  try {
    // Get weather data from OpenWeatherMap API
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${'98b562f8271473ca272849f1f58b8227'}`);

    // Extract relevant weather information from the API response
    const weatherData = {
      location: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
    };

    // Send the weather data as a JSON response
    res.json(weatherData);
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error(error);
    res.status(500).send('Error fetching weather data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
