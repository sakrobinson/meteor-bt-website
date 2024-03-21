import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ForecastsTable = () => {
  const [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    axios.get('/api/forecasts')
      .then(response => setForecasts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table>
      {/* Table headers and rows mapping forecasts */}
    </table>
  );
};

export default ForecastsTable;