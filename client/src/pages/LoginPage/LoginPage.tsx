import { Link } from 'react-router-dom';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={styles.login}>
      <h2 className={styles.header}>Log In</h2>
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
        <button className={styles.loginButton}>Log In</button>
      </form>
      <Link
        className={styles.registration}
        to='/registration'
      >
        Registration
      </Link>
    </div>
  );
};
