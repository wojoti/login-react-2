import LoginTemplate from "@templates/LoginTemplate/LoginTemplate";

function LoginPage() {
  const onLoginSubmit = (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    console.log({
      email,
      password,
      rememberMe,
    });
  };

  const onIconClick = (icon: string) => {
    console.log({ icon });
  };

  return (
    <LoginTemplate onLoginSubmit={onLoginSubmit} onIconClick={onIconClick} />
  );
}

export default LoginPage;
