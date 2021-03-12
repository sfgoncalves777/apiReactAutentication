import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContex';

const PrivateRoutes = ({ ...rest }) => {
  new Date();
  const { authenticated, loading, validate } = useAuth();

  if(loading) {
    return <h1>Loading</h1>
  }

  if(!authenticated || Date.now() > validate) {
    return <Redirect to='/login' />
  }

  return <Route { ...rest } />
}

export default PrivateRoutes;