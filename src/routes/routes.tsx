import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import Login from '../pages/Login/Login';

const Routes = () => {
  return (
        <Router>
            <Switch>
                <Route path={'/'} exact>
                    <Login />
                </Route>
                {/*<Redirect to={'/login'} />*/}
            </Switch>
        </Router>
  );
};

export default Routes;