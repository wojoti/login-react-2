import LoginTemplate from "@components/templates/LoginTemplate/LoginTemplate";
import axios from "axios";
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
    axios
      .get("http://192.168.1.16:3001", {
        auth: {
          username: email,
          password,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
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
