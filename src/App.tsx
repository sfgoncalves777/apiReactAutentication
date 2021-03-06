import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './routes/history';
import { AuthProvider } from './Context/AuthContex';

const App: React.FC = () => {
  return (
    <Router history={ history } >
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Router>
  )
}

export default App;