import React from 'react';
import LoginTemplate from '../components/templates/LoginTemplate/LoginTemplate';

function LoginPage() {
  const onLoginSubmit = (email: string, password: string, rememberMe: boolean) => {
    console.log({
      email,
      password,
      rememberMe,
    });
  };
  return <LoginTemplate onLoginSubmit={onLoginSubmit} />;
}

export default LoginPage;
