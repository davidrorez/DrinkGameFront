import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import CustomInput from '../components/CustomInput'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function IndexComponent({ setPlayers }) {
  const Swal = require('sweetalert2')
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');
  const [playerList, setPlayerList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (playerName.trim() !== '') {
      const newPlayer = { option: playerName };
      setPlayerList([...playerList, newPlayer]);
      setPlayers([...playerList, newPlayer]);
      setPlayerName('');
      setErrorMessage('');
    }
  };

  const handleDeletePlayer = (index) => {
    const updatedPlayerList = playerList.filter((_, i) => i !== index);
    setPlayerList(updatedPlayerList);
  };

  const handlePlayGame = () => {
    if (playerList && playerList.length > 1) {
      setPlayers(playerList)
      navigate('/challenge')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingresa al menos dos jugadores antes de continuar.'
      });
    }
  };

  /*if (!user) {
    return <Navigate to='/login' />;
  }*/

  /*if (user.admin) {
    return <Navigate to='/admin' />;
  }*/

  return (
    <div className='bg-color'>
      <div className="container py-5 d-flex flex-column justify-content-center align-items-center" style={{ flex: '1 0 auto' }}>
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-5">
          <h1 className='d-flex justify-content-center text-white mb-4'>¡Ingresa a los jugadores!</h1>
          <form onSubmit={handleAddPlayer}>
            <div className="d-flex justify-content-center input-group mb-3">
              <CustomInput
                playerName={playerName}
                setErrorMessage={setErrorMessage}
                setPlayerName={setPlayerName} />
            </div>
          </form>
          {errorMessage ? <div className='mb-3' style={{ color: 'red' }}>
            <h6>
              {errorMessage} <i class="bi bi-exclamation-triangle-fill ml-1"></i>
            </h6>
          </div>
            : null}
          <div className="row row-cols-1 row-cols-md-2">
            {playerList.map((player, index) => (
              <div key={index} className="col mb-3">
                <div className="list-group-item card rounded" style={{
                  padding: '0.5rem',
                  backgroundColor: 'rgb(48, 90, 110, 0.50)'
                }}>
                  <h4 className='text-white mb-2' >{player.option}
                    <IconButton type="submit"
                      onClick={() => handleDeletePlayer(index)}
                      style={{ color: '#ff0000bf', float: 'right', fontSize: '1.2rem' }}>
                      <PersonRemoveIcon />
                    </IconButton>
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <IconButton type="submit"
              className='pt-0 mt-0 hover-white'
              onClick={handlePlayGame}
              style={{ color: 'white' }}>
              <PlayCircleIcon style={{ fontSize: '8.5rem' }} />
            </IconButton>
          </div>
        </div>
      </div>
      <footer className="text-center text-lg-start">
        <div className="text-center text-white p-3">
          © 2023 Copyright
        </div>
      </footer>
    </div>
  );
}

export default IndexComponent;
