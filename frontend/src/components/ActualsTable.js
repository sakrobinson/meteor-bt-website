import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActualsTable = () => {
  const [actuals, setActuals] = useState([]);

  useEffect(() => {
    axios.get('/api/actuals')
      .then(response => setActuals(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table>
      {/* Table headers and rows mapping actuals */}
    </table>
  );
};

export default ActualsTable;