import React, { useState, useCallback } from "react";
import Logo from '../../../img/logoF.png';

function AdminComponent({
  user,
  Challenges,
  Players,
  Admins,
  themeMode,
  isDarkMode1,
  onLogout,
}) {
  const [activeTab, setActiveTab] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(true);
  const isDarkMode = isDarkMode1;

  const toggleTheme = () => {
    themeMode();
  };

  const handleTabChange = useCallback((tabName) => {
    setActiveTab(tabName);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = useCallback(() => {
    onLogout();
  }, [onLogout]);

  return (
    <div>
      <div
        className={`flex flex-col h-screen bg-${isDarkMode ? "dark" : "white"}`}
      >
        <div
          className={`bg-${isDarkMode ? "dark" : "white"} text-${isDarkMode ? "dark" : "white"
            } shadow w-full p-2 flex items-center justify-between`}
        >
          <div className="flex items-center">
            <div className="flex items-center h-12 w-20 ml-2 mr-2">
              <a href="/admin">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-28 h-18 mr-2"
                />
              </a>
            </div>
            <div className="flex items-center ">
              <button id="menuBtn" onClick={handleMenuToggle}>
                <i className="fas fa-bars text-gray-500 text-lg"></i>
              </button>
            </div>
          </div>
          <div className="flex items-centers space-x-3">
            <button>
              <i className="fas fa-user text-gray-500 text-lg"></i>
              <span className="text-gray-500 p-1 rounded">{user.name}</span>
            </button>
            <div className={`text-${isDarkMode ? "white" : "dark"} pr-2`}>
              <button
                onClick={toggleTheme}
                className={`rounded-full ${isDarkMode
                    ? "text-gray hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {isDarkMode ? (
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                ) : (
                  <svg
                    class="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 8a2 2 0 1 0 4 4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 flex flex-wrap ${isMenuOpen ? " toggled" : ""}`}
          id="wrapper"
        >
          <div
            className={`w-full md:w-60 md:h-50 flex flex-col bg-${isDarkMode ? "dark" : "white"
              } ${isMenuOpen ? "" : "md:flex hidden "}`}
            id="sidebar-wrapper"
          >
            <nav className={`bg-${isDarkMode ? "dark" : "white"}`}>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-home mr-2"></i>Inicio
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-file-alt mr-2"></i>Autorizaciones
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-users mr-2"></i>Usuarios
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-store mr-2"></i>Comercios
              </a>
              <a
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
                href="#"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-exchange-alt mr-2"></i>Transacciones
              </a>
            </nav>
            <a
              className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto"
              onClick={handleLogout}
              role="button"
              style={{ textDecoration: "none" }}
            >
              <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
            </a>
          </div>
          <div
            className={`flex-1 p-4 w-full md:w-1/2 bg-${isDarkMode ? "dark" : "white"
              }`}
          >
            <div className="relative max-w-md w-full"></div>
            <h1 className={`text-${isDarkMode ? "white" : "dark"}`}>
              Administrador
            </h1>
            <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
              <div
                className={`flex-1 bg-${isDarkMode ? "dark" : "white"
                  } p-4 shadow rounded-lg md:w-1/2`}
              >
                <h2 className="text-gray-500 text-lg font-semibold pb-1">
                  Usuarios
                </h2>
                <div className="my-1"></div>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <div
                  className="chart-container"
                  style={{
                    position: "relative",
                    height: "150px",
                    width: "100%",
                  }}
                >
                  <canvas id="usersChart"></canvas>
                </div>
              </div>
              <div
                className={`flex-1 bg-${isDarkMode ? "dark" : "white"
                  } p-4 shadow rounded-lg md:w-1/2`}
              >
                <h2 className="text-gray-500 text-lg font-semibold pb-1">
                  Comercios
                </h2>
                <div className="my-1"></div>
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <div
                  className="chart-container"
                  style={{
                    position: "relative",
                    height: "150px",
                    width: "100%",
                  }}
                >
                  <canvas id="commercesChart"></canvas>
                </div>
              </div>
            </div>

            {/* HACER LA LOGICA DE MOSTRAR LA TABLA COMPLETA EN EL BOTON DE VER MAS 
            CON EL USE STATE DE ACTIVE TAB */}
            <Admins />
            <Players />


          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminComponent;
