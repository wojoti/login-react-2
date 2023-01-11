// eslint-disable-next-line import/order, import/extensions
import { logIn, logOut } from "@/store/userSlice";
import LoginTemplate from "@components/templates/LoginTemplate/LoginTemplate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    dispatch(
      logIn({
        email,
        password,
      })
    );
  };

  const onIconClick = (icon: string) => {
    dispatch(logOut());
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
