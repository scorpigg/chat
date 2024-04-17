import { Link } from 'react-router-dom';

export const RegistrationPage = () => {
  return (
    <div>
      <form>
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
      </form>
      <Link to={'/login'}>LogIn</Link>

    </div>
  );
};
