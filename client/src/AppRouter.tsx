import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { ChatPage } from './pages/ChatPage/ChatPage';

export const AppRouter = () => {
  return (
    <div className='app'>
      <Routes>
        <Route
          path='*'
          element={<Navigate to='/login'/>}
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

