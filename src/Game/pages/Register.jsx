import React, {useEffect } from 'react';
import FormRegister from '../components/FormRegister';
import { Navigate } from 'react-router-dom';

function Register({ user, setShowAllNavbar }) {

  useEffect(() => {
    setShowAllNavbar(true);
  }, []);

  if (user) {
    return <Navigate to='/' />;
  }

  return (
    <FormRegister user={user}/>
  )
}

export default Register;