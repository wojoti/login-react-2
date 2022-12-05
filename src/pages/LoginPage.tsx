import { useEffect, useRef } from 'react'
import { RefHandler } from '../components/organisms/LoginForm/LoginForm'
import LoginTemplate from '../components/templates/LoginTemplate/LoginTemplate'
const LoginPage = () => {
  const loginRef = useRef<RefHandler>(null)

  useEffect(() => {
    loginRef?.current?.emailRef?.current?.focus()
  })

  const onLoginSubmit = () => {
    console.log({
      email: loginRef?.current?.emailRef?.current?.value,
      password: loginRef?.current?.passwordRef?.current?.value,
      rememberme: loginRef?.current?.rememberRef?.current?.checked,
    })
  }
  return <LoginTemplate ref={loginRef} onLoginSubmit={onLoginSubmit} />
}

export default LoginPage
