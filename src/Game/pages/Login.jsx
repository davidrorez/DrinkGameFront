import React, { useEffect } from 'react';
import FormLogin from '../components/FormLogin';
import { Navigate } from 'react-router-dom';

function Login({ user, setUser, setShowAllNavbar }) {
  useEffect(() => {
    setShowAllNavbar(true);
  }, []);

  if (user) {
    return <Navigate to='/' />;
  }

  return (
      <FormLogin setUser={setUser} />
  )
}

export default Login;