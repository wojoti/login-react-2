/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line import/order, import/extensions
import { AppDispatch } from "@/store/store";
import { fetchUserData } from "@/store/userSlice";
import LoginTemplate from "@components/templates/LoginTemplate/LoginTemplate";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
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
    dispatch(fetchUserData({ username: email, password }));
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
