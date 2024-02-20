import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import s from './header.module.scss';

const Header = () => {
  const { onChangeTheme } = useContext(ThemeContext);

  return (
    <header className={s.header}>
      <div className={s.logo} onClick={onChangeTheme}>
        Social App
      </div>
    </header>
  );
};

export default Header;
