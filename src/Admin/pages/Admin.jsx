import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminComponent from '../components/dashboard/AdminComponent';
import { IndexAdmins } from '../components/users/userAdmin/Index';
import IndexPlayers from '../components/users/userPlayer/Index';
import IndexChallenges from '../components/challenges/Index';

let theme = false; // Initial color

export function Admin({ user, themeMode, isDarkMode, onLogout }) {

  theme = isDarkMode;

  if (!user) {
    return <Navigate to='/login' />
  }

  if (!user.admin) {
    return <Navigate to='*' />
  }

  return (
    <div>
      <AdminComponent
        user={user}
        Challenges={IndexChallenges}
        Players={IndexPlayers}
        Admins={IndexAdmins}
        themeMode={themeMode}
        isDarkMode1={isDarkMode}
        onLogout={onLogout}
      />
    </div>
  );
}

export function getIsDarkMode() {
  return theme;
}