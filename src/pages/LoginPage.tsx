import LoginTemplate from "@templates/LoginTemplate/LoginTemplate";

function LoginPage() {
  const onLoginSubmit = (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    // eslint-disable-next-line
    console.log({
      email,
      password,
      rememberMe,
    });
  };
  return <LoginTemplate onLoginSubmit={onLoginSubmit} />;
}

export default LoginPage;
