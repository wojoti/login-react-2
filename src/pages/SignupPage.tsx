import SignupTemplate from "../components/templates/SignupTemplate/SignupTemplate";

function SignupPage() {
  const onSignupSubmit = (email: string, password: string) => {
    console.log({
      email,
      password,
    });
  };
  return <SignupTemplate onSignupSubmit={onSignupSubmit} />;
}

export default SignupPage;
