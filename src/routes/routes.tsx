import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { store } from '../store/store';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';

const Routes = observer(() => {
  if (!store.isAuth) {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
});

export default Routes;
