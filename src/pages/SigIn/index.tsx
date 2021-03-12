import React from 'react';
import { useAuth } from '../../Context/AuthContex';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  return <button onClick={ signIn } >Entrar</button>
}

export default SignIn;