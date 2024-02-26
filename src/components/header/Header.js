import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import {
  BsFillHouseDoorFill,
  BsMoonStarsFill,
  BsSunFill,
  BsPersonFill,
  BsEnvelopeFill,
  BsBellFill,
  BsChevronDown,
} from 'react-icons/bs';
import user from '../../assets/img/user.jpeg';

import s from './header.module.scss';

const Header = () => {
  const { onChangeTheme, theme } = useContext(ThemeContext);

  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_left}>
          <div className={s.logo_wrapper}>
            <div className={s.logo}>SA</div>
            <p className={s.logo_txt}>Social App</p>
          </div>
          {/* <div>
            <BsFillHouseDoorFill className={s.icon} />
          </div> */}
        </div>
        <div className={s.header_right}>
          <div className={s.theme} onClick={onChangeTheme}>
            {theme === 'light' ? (
              <BsSunFill style={{ fontSize: '22px' }} />
            ) : (
              <BsMoonStarsFill style={{ fontSize: '20px', color: '#fff' }} />
            )}
          </div>
          <div className={s.menu}>
            <div className={s.menu_item}>
              <BsPersonFill className={s.icon} />
            </div>
            <div className={s.menu_item}>
              <BsBellFill className={s.icon} />
            </div>
            <div className={s.menu_item}>
              <BsEnvelopeFill className={s.icon} />
            </div>
          </div>
          <div className={s.user}>
            <div className={s.user_img}>
              <img src={user} alt="" />
            </div>

            <BsChevronDown className={s.icon} style={{ fontSize: '12px' }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
