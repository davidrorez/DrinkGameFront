import React, { useEffect } from 'react';
import Card from '../components/Card';
import Welcome from '../../commons/Welcome';

function Index({ user, setUser, setShowAllNavbar, setBgColor }) {
  useEffect(() => {
    setShowAllNavbar(true);
  }, []);

  if (!user) {
		return <Welcome setUser={setUser}/>
	}

  return (
    <Card setBgColor={setBgColor}/>
  )
}

export default Index;
