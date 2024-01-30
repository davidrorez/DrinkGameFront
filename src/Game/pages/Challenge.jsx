import React, { useEffect } from 'react';
import ChallengeCard from '../components/ChallengeCard';
import { Navigate } from 'react-router-dom';

function Challenge({ players, setShowAllNavbar }) {

  useEffect(() => {
    setShowAllNavbar(false);
  }, []);

  if (!players) {
    return <Navigate to='/' />
  }

  return (
    <>
      <ChallengeCard players={players} setShowAllNavbar={setShowAllNavbar}/>
    </>
  );
}

export default Challenge;
