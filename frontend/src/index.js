const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint to fetch first rows from actual_weather table
app.get('/actuals', async (req, res) => {
  try {
    const query = 'SELECT * FROM actual_weather LIMIT 10'; // Adjust LIMIT as needed
    const result = await client.execute(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint to fetch first rows from forecast_weather table
app.get('/forecasts', async (req, res) => {
  try {
    const query = 'SELECT * FROM forecast_weather LIMIT 10'; // Adjust LIMIT as needed
    const result = await client.execute(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Add more endpoints for UPDATE and DELETE as needed