import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { store } from '../store/store';
import Login from '../pages/Login/Login';
import { observer } from 'mobx-react-lite';

const Routes = observer(() => {

  if (!store.auth.isAuth){
    return (
          <Router>
              <Switch>
                  <Route path={'/'} exact>
                      <Login />
                  </Route>
                  <Redirect to={'/'} />
              </Switch>
          </Router>
    );
  }

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



});

export default Routes;