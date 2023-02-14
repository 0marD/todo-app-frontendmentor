import React, { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'default'
  );

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Save localStorage error: ', error);
    }
  }, [theme]);

  const changeTheme = () => setTheme(theme === 'default' ? 'dark' : 'default');

  return { theme, changeTheme, setTheme };
};

export { useTheme };
