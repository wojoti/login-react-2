import SignupTemplate from "@components/templates/SignupTemplate/SignupTemplate";

function SignupPage() {
  const onSignupSubmit = (email: string, password: string) => {
    console.log({
      email,
      password,
    });
  };
  const onIconClick = (icon: string) => {
    console.log({ icon });
  };
  return (
    <SignupTemplate onSignupSubmit={onSignupSubmit} onIconClick={onIconClick} />
  );
}

export default SignupPage;
