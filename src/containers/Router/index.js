import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from 'containers/App';
import Home from 'containers/Home';
import history from 'utils/history';

const AppRouter = () => {
  return (
    <Router history={ history }>
      <Switch>
        <Route
          path={ `/` }
          render={ props =>
            <App { ...props }>
              <Home { ...props } />
            </App>
          }
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
