import { Link } from 'react-router-dom';

import s from './register.module.scss';

const Register = () => {
  return (
    <div className={s.register}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="text" placeholder="Name" />
      <button>Register</button>
      <h1>Hello world</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Register;
