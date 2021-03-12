import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoutes';

import SignIn from '../pages/SigIn';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/login' component={ SignIn } />
      <PrivateRoute path='/home' component={ Home } />
      <PrivateRoute path='/dashboard' component={ Dashboard } />
    </Switch>
  )
}

export default Routes;