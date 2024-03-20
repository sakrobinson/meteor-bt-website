import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActualsTable from './components/ActualsTable';
import ForecastsTable from './components/ForecastsTable';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Other routes */}
        <Route path="/weather-data" exact>
          <div>
            <ActualsTable />
            <ForecastsTable />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;