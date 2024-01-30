import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import { getFetch } from '../../commons/ApiMethods';

function ChallengeCard({ players }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [challenges, setChallenges] = useState([]);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const defaultOptions = [{ option: 'Todos' }, { option: 'Nadie' }, { option: 'Secreto' }];
  let selectedPlayer = '';

  useEffect(() => {
    getFetch('challenge').then((data) => {
      setChallenges(data);
    });
  }, []);

  const data = [...players, ...defaultOptions];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setIsNameVisible(false);

      const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
      setSelectedChallenge(randomChallenge?.challengecol || '');
    }
  };

  const onStopSpinning = () => {
    setMustSpin(false);
    setIsNameVisible(true);
  };

  if (data && data.length > 0) {
    selectedPlayer = data[prizeNumber]?.option;
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="wheel-container">
              <Wheel
                className="wheel"
                mustStartSpinning={mustSpin}
                radiusLineColor={'white'}
                outerBorderWidth={2}
                radiusLineWidth={2}
                outerBorderColor={''}
                backgroundColors={['#808e96', '#546871']}
                textColors={['white']}
                prizeNumber={prizeNumber}
                fontSize={30}
                data={data}
                onStopSpinning={onStopSpinning}
              />
            </div>
            <div className="d-flex justify-content-center mt-4 div-mb">
              <Button
                style={{ backgroundColor: '#e24a2b', textTransform: 'none' }}
                onClick={handleSpinClick}
                variant="contained">Girar
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className="card shadow-2-strong m-2 mt-4"
              style={{ borderRadius: '1rem', backgroundColor: '#0D1D25' }}
            >
              <div className="card-body p-4 p-md-5 text-center text-white">
                <h1 className="mb-3">
                  Reto para{isNameVisible ? " " + selectedPlayer : '...'}
                </h1>
                <div style={{ marginBottom: '1rem' }}>
                  {isNameVisible && <h4 className="mb-3">{selectedChallenge}</h4>}
                </div>
                <hr className="my-4 mb-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengeCard;
