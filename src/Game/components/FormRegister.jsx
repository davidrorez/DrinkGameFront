import React, { useState, useEffect } from "react";
import { postFetch } from "../../commons/ApiMethods";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";

function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const rol = 0;
  const navigate = useNavigate();
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postFetch("user", {
        user: {
          name: name,
          email: email,
          rol: rol,
          password: password,
        },
      });
      if (response.duplicated) {
        setAlertText("¡El correo ingresado ya existe!");
        setShowAlertError(true);
        return;
      }
      if (response.error) {
        setAlertText("¡Algo salió mal. Intentalo de nuevo!");
        setShowAlertError(true);
      } else {
        setAlertText("¡Registro Exitoso!");
        setShowAlertSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const customTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const AlertSuccess = ({ alertSuccess, alertError }) => {
    useEffect(() => {
      if (alertSuccess) {
        const timeout = setTimeout(() => {
          setName("");
          setEmail("");
          setPassword("");
          navigate("/login");
        }, 1000);

        return () => clearTimeout(timeout);
      }
    }, [alertSuccess, navigate]);

    if (alertSuccess) {
      return (
        <Alert
          variant="filled"
          severity="success"
          sx={{ color: "white" }}
        >
          {alertText}
        </Alert>
      );
    } else if (alertError) {
      return (
        <Alert
          variant="filled"
          severity="error"
          onClose={() => {setShowAlertError(false)}}
        >
          {alertText}
        </Alert>
      );
    }
  };

  return (
    /*
    <section>
      <div className="container py-5 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong mt-4" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-5 text-center">
              <h3 className="mb-3">Crear cuenta</h3>
              <div style={{ marginBottom: '1rem' }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="text">Nombre de usuario</label>
                    <input
                      type="text"
                      id="text"
                      className="form-control form-control-lg"
                      placeholder='Nombre de usario'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">Correo electrónico</label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder='Correo electrónico'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <p style={{ color: 'red', marginBottom: 0 }}>{alertText}</p>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">Contraseña</label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder='Contraseña'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label ms-2" htmlFor="form1Example3">Recordar contraseña</label>
                  </div>

                  <button className="btn btn-primary btn-lg btn-block" type="submit">Ingresar</button>
                </form>
              </div>
              <hr className="my-4 mb-3" />
              <p> Ya tienes una cuenta? <a href="/login" style={{textDecoration: 'none'}}>Inicia sesión</a> </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-lg-start">
        <div className="text-center text-white p-3">
          © 2023 Copyright
        </div>
      </footer>
    </section>
    */
    <section className="bg-color">
      <ThemeProvider theme={customTheme}>
        <Container component="main" maxWidth="xs" className="mt-5">
          <AlertSuccess
            alertSuccess={showAlertSuccess}
            alertError={showAlertError}
          />
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Crear Cuenta
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre de usuario"
                name="nombre"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Crear cuenta
              </Button>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"¿Ya tienes cuenta? Ingresa."}
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

export default FormRegister;
