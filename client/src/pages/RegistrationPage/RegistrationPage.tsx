import { Link } from 'react-router-dom';
import styles from './Registration.module.scss';
import { useState } from 'react';
import AuthService from '../../services/AuthService';

export const RegistrationPage = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await AuthService.registration(email, password);
    localStorage.setItem('auth', email);
  };

  return (
    <div className={styles.registration}>
      <h2 className={styles.header}>Registration</h2>
      <form
        className={styles.form}
        onSubmit={handleSubmitForm}
      >
        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder='Enter your email'
          />
        </label>
        <label>
          Password
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Enter your password'
          />
        </label>
        {/* <label>
          Confirm password
          <input
            type="password"
            placeholder='Enter your password'
          />
        </label> */}
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
