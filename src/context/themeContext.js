import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const root = document.querySelector(':root');
    const themes = ['body-background'];
    themes.map((item) => {
      root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`);
    });
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, onChangeTheme }}>{children}</ThemeContext.Provider>;
};
