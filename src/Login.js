import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle, logout } from './auth';

export const Login = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (user && window.location.hash === '#/login') {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      {user ? (
        <div>
          <p>ようこそ {user.displayName} さん</p>
          <button onClick={logout}>ログアウト</button>
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Googleでログイン</button>
      )}
    </div>
  );
};

export default Login;