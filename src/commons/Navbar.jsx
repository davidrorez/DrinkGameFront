import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import '../App.css';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SettingsIcon from '@mui/icons-material/Settings';

function Navbar({ user, onLogout, showAllNavbar, isDarkMode, themeMode, onDestroy }) {
  const navigate = useNavigate();
  const Swal = require('sweetalert2');

  const handleLogout = () => {
    onLogout();
  };

  const handleSettings = () => {
    alert(themeMode())
  }
  const toggleTheme = () => {
    themeMode();
  };
  const handleExit = () => {
    Swal.fire({
      title: '¿Seguro que quieres salir?',
      showCancelButton: true,
      confirmButtonText: 'Salir',
    }).then((result) => {
      if (result.isConfirmed) {
        onDestroy();
        navigate('/')
      }
    })
  };

  if (user && user.admin) {
    return null
  }

  return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-0">
      <div className="container-fluid p-0">
        {showAllNavbar ?
          <>
            <a className='p-1' href="/"> <Logo /> </a>
            <Dropdown as="div" className="nav-item nav-link btn btn-link ">
              <Dropdown.Toggle className='pl-0' variant="none" id="dropdown-basic" style={{
                boxShadow: 'none',
              }}>
                <>
                  {user ?
                    <span className='text-white pt-4'>
                      {themeMode}
                    </span>
                    : ''}
                </>
                <IconButton className='pl-1 pr-0' type="submit" style={{ color: 'white' }}>
                  <ManageAccountsIcon style={{ fontSize: '2rem' }} />
                </IconButton>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {user ?
                  <>
                    <Dropdown.Item>Mi cuenta</Dropdown.Item> {/*crear cambiar nombre, ver datos, etc..*/}
                    <Dropdown.Item onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
                  </>
                  :
                  <>
                    <Dropdown.Item href="/login">Iniciar sesión</Dropdown.Item>
                    <Dropdown.Item href="/registration">Crear cuenta</Dropdown.Item>
                  </>
                }
              </Dropdown.Menu>
            </Dropdown>
          </>
          :
          <>
            <IconButton
              className='text-white m-2 p-2'
              type="submit"
              onClick={handleExit}
            >
              < ArrowCircleLeftIcon style={{ fontSize: '2rem' }} />
            </IconButton>
            <IconButton className='text-white m-2 p-2'
              type="submit">
              < SettingsIcon style={{ fontSize: '2rem' }} />
            </IconButton>
          </>
        }
      </div>
    </nav>
  );
}

export default Navbar;
