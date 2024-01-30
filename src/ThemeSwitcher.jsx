import React, { useState } from 'react';

function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(prevMode => !prevMode);
    localStorage.theme = isDarkMode ? 'light' : 'dark';
  }

  return (
    <div className={`bg-${isDarkMode ? 'black' : 'white'} text-${isDarkMode ? 'white' : 'black'} p-4`}>
      <button
        className={`bg-${isDarkMode ? 'white' : 'black'} text-${isDarkMode ? 'black' : 'white'} px-4 py-2 rounded-md`}
        onClick={toggleTheme}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
