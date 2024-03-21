import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import ActualsTable from './components/ActualsTable';
//import ForecastsTable from './components/ForecastsTable';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/weather-data" element={
          <div>
            <TestPage/>
          </div>
        } />
        {/* More routes can be added here */}
      </Routes>
    </Router>
  );
};

export default App;