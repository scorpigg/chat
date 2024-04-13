import { Link } from 'react-router-dom';
import styles from './Registration.module.scss';

export const RegistrationPage = () => {
  return (
    <div className={styles.registration}>
      <h2 className={styles.header}>Registration</h2>
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
        <label>
          Confirm password
          <input
            type="password"
            placeholder='Enter your password'
          />
        </label>
        <button className={styles.button}>Register</button>
      </form>
      <Link
        className={styles.login}
        to='/login'
      >
        to Log In page
      </Link>
    </div>
  );
};
