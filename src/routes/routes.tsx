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
import { standardPath } from '../constants/const';

const Routes = observer(() => {
  if (!store.isAuth) {
    return (
      <Router>
        <Switch>
          <Route path={standardPath} exact>
            <Login />
          </Route>
          <Redirect to={standardPath} />
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path={standardPath} exact>
          <Main />
        </Route>
        <Redirect to={standardPath} />
      </Switch>
    </Router>
  );
});

export default Routes;
