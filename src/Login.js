import React from 'react';
import { loginWithGoogle, logout } from './auth';

export const Login = ({user}) => {
  return (
    <div>
      {user ?(
        <div>
          <p>ようこそ{user.displayName}さん</p>
          <button onClick={logout}>ログアウト</button>
        </div>
      ):(
        <button onClick={loginWithGoogle}>googleでログイン</button>
      )}
    </div>
  );
}

export default Login;