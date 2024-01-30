import React, { useState } from 'react';
import { postFetch } from '../../commons/ApiMethods';
import { useNavigate } from "react-router-dom";

function FormRegister() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertText, setAlertText] = useState('');
  const rol = 0;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postFetch('user', {
        user: {
          name: name,
          email: email,
          rol: rol,
          password: password,
        },
      })
        if (response.duplicated) {
          setAlertText('Ya existe una cuenta con ese email.')
          return;
        }
        if (response.error) {
          alert('Algo salió mal. Intentalo de nuevo')
        } else {
          setName('');
          setEmail('');
          setPassword('');
          alert('Registro exitoso!')
          navigate('/login')
        }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
}

export default FormRegister;