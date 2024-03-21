const express = require('express');
const cassandra = require('cassandra-driver');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Cassandra client
const client = new cassandra.Client({
  contactPoints: ['localhost'], // or the VPS IP if necessary
  localDataCenter: 'datacenter1', // replace with your local data center name
  keyspace: 'weather_data'
});

client.connect()
  .then(() => console.log('Connected to Cassandra'))
  .catch(e => console.error(e));

// Define the GET route for actual_weather table
app.get('/api/actuals', async (req, res) => {
  try {
    const query = 'SELECT * FROM actual_weather LIMIT 10';
    const result = await client.execute(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Define the GET route for forecast_weather table
app.get('/api/forecasts', async (req, res) => {
  try {
    const query = 'SELECT * FROM forecast_weather LIMIT 10';
    const result = await client.execute(query);
    res.json(result.rows);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));