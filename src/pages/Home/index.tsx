import React from 'react';
import history from '../../routes/history'
import { useAuth } from '../../Context/AuthContex';

const Home: React.FC = () => {
  const { signOut } = useAuth();

  function handleToDashboard() {
    history.push('/dashboard');
  }

  return (
    <div>
      <button onClick={ signOut } >Sair</button>
      <button onClick={ handleToDashboard } >Dashboard</button>
    </div>
  )
}

export default Home;