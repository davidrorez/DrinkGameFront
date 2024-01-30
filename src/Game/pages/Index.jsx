import React, { useEffect } from 'react';
import IndexComponent from '../components/IndexComponent';
import Welcome from '../../commons/Welcome';

function Index({ user, setUser, setPlayers, setShowAllNavbar }) {
  useEffect(() => {
    setShowAllNavbar(true);
  }, []);

  if (!user) {
		return <Welcome setUser={setUser}/>
	}

  return (
    <IndexComponent setPlayers={setPlayers}/>
  )
}

export default Index;
