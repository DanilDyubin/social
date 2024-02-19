import { useState, useEffect } from 'react';
import s from './header.module.scss';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.querySelector(':root');
    const themes = ['body-background'];
    themes.map(
      (item) => {
        root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`);
      },
      [theme],
    );
  });

  return (
    <header className={s.header}>
      <div className={s.logo} onClick={onChangeTheme}>
        Social App
      </div>
    </header>
  );
};

export default Header;
