import SignupTemplate from "@components/templates/SignupTemplate/SignupTemplate";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const onSignupSubmit = (email: string, password: string) => {
    console.log({
      email,
      password,
    });
  };
  const onIconClick = (icon: string) => {
    console.log({ icon });
  };
  const onLinkClick = (path: string) => {
    navigate(path);
  };
  return (
    <SignupTemplate
      onSignupSubmit={onSignupSubmit}
      onIconClick={onIconClick}
      onLinkClick={onLinkClick}
    />
  );
}

export default SignupPage;
