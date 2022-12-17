import SignupTemplate from "@templates/SignupTemplate/SignupTemplate";

function SignupPage() {
  const onSignupSubmit = (email: string, password: string) => {
    // eslint-disable-next-line
    console.log({
      email,
      password,
    });
  };
  return <SignupTemplate onSignupSubmit={onSignupSubmit} />;
}

export default SignupPage;
