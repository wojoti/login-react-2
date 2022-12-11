import LoginTemplate from '../components/templates/LoginTemplate/LoginTemplate'
const LoginPage = () => {
  const onLoginSubmit = (email: string, password: string, rememberMe: boolean) => {
    console.log({
      email: email,
      password: password,
      rememberMe: rememberMe,
    })
  }
  return <LoginTemplate onLoginSubmit={onLoginSubmit} />
}

export default LoginPage
