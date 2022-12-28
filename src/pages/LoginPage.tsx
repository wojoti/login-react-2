import LoginTemplate from "@components/templates/LoginTemplate/LoginTemplate";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
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

  const onLinkClick = (path: string) => {
    navigate(path);
  };

  return (
    <LoginTemplate
      onLoginSubmit={onLoginSubmit}
      onIconClick={onIconClick}
      onLinkClick={onLinkClick}
    />
  );
}

export default LoginPage;
