import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Welcome({ setUser }) {
  const Swal = require("sweetalert2");
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "¡Atención!",
      icon: "warning",
      text: "El consumo excesivo de alcohol es nocivo para la salud.",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }, []);

  const handleLogin = () => {
    return navigate("/login");
  };

  const handleLoginGuest = () => {
    const userGuest = { name: "Inivitado" };
    setUser(userGuest);
    return navigate("/");
  };

  return (
    <div className="bg-color">
      <div
        className="container py-5 d-flex justify-content-center align-items-center"
        style={{ flex: "1 0 auto" }}
      >
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="sign">
            <span class="fast-flicker">D</span>rink
            <span class="flicker">G</span>ame
          </div>
          <p
            className="d-flex justify-content-center text-white"
            style={{ marginTop: "7rem" }}
          >
            Elige una opción para empezar.
          </p>
          <div className="d-flex justify-content-center flex-md-row flex-column">
            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                style={{ backgroundColor: "#e24a2b" }}
                sx={{ m: 2 }}
                onClick={handleLogin}
              >
                Iniciar sesión
              </Button>
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#e24a2b",
                  fontSize: "13px",
                  height: "37px",
                }}
                sx={{ m: 2 }}
                onClick={handleLoginGuest}
              >
                Partida rápida
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-lg-start">
        <div className="text-center text-white p-3">© 2023 Copyright</div>
      </footer>
    </div>
  );
}

export default Welcome;
