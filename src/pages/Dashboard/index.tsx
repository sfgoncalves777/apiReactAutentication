import React from 'react';
import { useAuth } from '../../Context/AuthContex';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return <button onClick={ signOut } >Sair</button>
}

export default Dashboard;