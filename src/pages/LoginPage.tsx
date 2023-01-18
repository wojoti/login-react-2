import { AppDispatch, RootState } from "@/store/store";
import { fetchUserData } from "@/store/userSlice";
import { LoginTemplate } from "@components/templates";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export interface LoginPageProps {
  testId?: string;
}

function LoginPage({ testId }: LoginPageProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);
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
      userData={user}
      testId={testId}
    />
  );
}

export default LoginPage;
