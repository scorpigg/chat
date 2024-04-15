import { Link } from 'react-router-dom';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.loginWrapper}>
      <form className={styles.form}>
        <label>
          Email
          <input
            type="text"
            placeholder='Enter your email'
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder='Enter your password'
          />
        </label>
        <button>Log In</button>
      </form>
      <Link to={'/registration'}>Registration</Link>
    </div>
  );
};
