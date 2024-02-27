import { Link } from 'react-router-dom';

import s from './login.module.scss';

const Login = () => {
  return (
    <div className={s.login}>
      <h1>Hello world</h1>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <h2>Login</h2>
      <input type="text" />
      <input type="password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
