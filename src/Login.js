import React from 'react';
import { loginWithGoogle } from './auth';

 export const Login = () => {
  return (
    <div>
      <h1>ログインページ</h1>
      <button onClick = {loginWithGoogle}>Googleログイン</button>
    </div>
  );
};

export default Login;