import SignupTemplate from '../components/templates/SignupTemplate/SignupTemplate'

const SignupPage = () => {
  const onSignupSubmit = (email: string, password: string) => {
    console.log({
      email: email,
      password: password,
    })
  }
  return <SignupTemplate onSignupSubmit={onSignupSubmit} />
}

export default SignupPage
