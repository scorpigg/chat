import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { ChatPage } from './components/ChatPage/ChatPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegistrationPage } from './components/RegistrationPage/RegistrationPage';

export const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route
          path='*'
          element={<Navigate to={'/login'} />}
        />
        <Route
          path='/login'
          element={<LoginPage/>}
        />
        <Route
          path='/registration'
          element={<RegistrationPage/>}
        />
        <Route
          path='/chat'
          element={<ChatPage/>}
        />
      </Routes>
    </div>
  );
};

