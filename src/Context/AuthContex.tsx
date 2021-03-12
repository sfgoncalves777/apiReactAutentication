import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth';
import history from '../routes/history';

interface AuthContexData{
  authenticated: boolean;
  loading: boolean;
  validate: number;
  signIn(): Promise<void>
  signOut(): void;
}

const AuthContext = createContext<AuthContexData>({} as AuthContexData);

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [validate, setValidate] = useState(0);
  new Date();

  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    const storageValidate = Number(localStorage.getItem('validate'));

    if(storageToken && storageValidate > Date.now()) {
      setAuthenticated(true);
    }

    localStorage.clear();
    setLoading(false);

  }, [])

  async function signIn() {
    const response = await auth.signIn();
    setValidate(Date.now() + 60000);
    localStorage.setItem('token', JSON.stringify(response.token));
    localStorage.setItem('validate', JSON.stringify(validate));
    setAuthenticated(true);
    history.push('/home');
  }

  async function signOut() {
    setAuthenticated(false);
    localStorage.clear();
    history.push('/login');
  }

  return (
    <AuthContext.Provider value={{ authenticated, validate, loading, signIn, signOut }} >
      { children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}