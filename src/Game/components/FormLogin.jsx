import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function FormLogin({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertText, setAlertText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postFetch('user/login', {
        user: {
          email: email,
          password: password,
        },
      })
      console.log(response)
      if (response.incorrectEmail) {
        setAlertText('Correo incorrecto. Inténtalo de nuevo.');
      } else if (response.incorrectPassword) {
        setAlertText('Contraseña incorrecta. Inténtalo de nuevo.');
      } else if (response.error) {
        alert('Algo salió mal')
      } else {
        setEmail('');
        setPassword('');
        if (!response.admin) {
          setUser(response);
          navigate('/');
        } else {
          setUser(response);
          navigate('/admin');
        }
      }

    } catch (error) {
      console.log(error);
    }
  };

  const customTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <section className='bg-color'>
    <ThemeProvider theme={customTheme}>
      <Container component="main" maxWidth="xs" className='mt-5'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar correo"
            />
            <p style={{ color: 'red', marginBottom: 0 }}>{alertText}</p>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/registration" variant="body2">
                  {"¿No tienes cuenta? Registrate."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </section>
  );
}

export default FormLogin;
