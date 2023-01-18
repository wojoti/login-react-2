import { SignupTemplate } from "@components/templates";
import { useNavigate } from "react-router-dom";

export interface SignupPageProps {
  testId?: string;
}

function SignupPage({ testId }: SignupPageProps) {
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
      testId={testId}
    />
  );
}

export default SignupPage;
