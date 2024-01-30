import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Admin} from "./Admin/pages/Admin";
import Index from "./Game/pages/Index";
import Login from "./Game/pages/Login";
import Register from "./Game/pages/Register";
import NotFound from "./commons/NotFound";
import Navbar from "./commons/Navbar";
import Challenge from "./Game/pages/Challenge";
import "./App.css";

function App() {
  const storedUser = localStorage.getItem("user");
  const storedPlayers = localStorage.getItem("players");
  const storedThemeMode = localStorage.getItem("themeMode");
  const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
  const [players, setPlayers] = useState(
    storedPlayers ? JSON.parse(storedPlayers) : null
  );
  const [showAllNavbar, setShowAllNavbar] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    localStorage.theme = isDarkMode ? 'light' : 'dark';
  }

  useEffect(() => {
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const destroyPlayers = () => {
    setPlayers(null);
    localStorage.removeItem("players");
  };

  return (
    <Router>
      <Navbar
        user={user}
        onLogout={handleLogout}
        showAllNavbar={showAllNavbar}
        isDarkMode={isDarkMode}
        themeMode={themeMode}
        onDestroy={destroyPlayers}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Index
              user={user}
              setUser={setUser}
              setPlayers={setPlayers}
              setShowAllNavbar={setShowAllNavbar}
            />
          }
        />
        <Route
          exact
          path="/registration"
          element={<Register user={user} setShowAllNavbar={setShowAllNavbar} />}
        />
        <Route
          exact
          path="/admin"
          element={<Admin user={user} themeMode={themeMode} isDarkMode={isDarkMode} onLogout={handleLogout} />}
        />
        <Route
          exact
          path="/challenge"
          element={
            <Challenge players={players} setShowAllNavbar={setShowAllNavbar} />
          }
        />
        <Route path="*" element={<NotFound user={user} />} />
        <Route
          exact
          path="/login"
          element={
            <Login
              user={user}
              setUser={setUser}
              setShowAllNavbar={setShowAllNavbar}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
