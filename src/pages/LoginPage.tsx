import { SyntheticEvent, useState } from 'react'
import LoginTemplate from '../components/templates/LoginTemplate/LoginTemplate'
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const onEmailChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const onRememberChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setRemember(event.currentTarget.checked)
  }

  const onLoginSubmit = (event: SyntheticEvent<HTMLInputElement>) => {
    // event.preventDefault(); //don't use preventDefault when not using form
    const completeAction = {
      email,
      password,
      remember,
      action: event.currentTarget,
    }
    console.log(completeAction)
  }
  return (
    <LoginTemplate
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onRememberChange={onRememberChange}
      onLoginSubmit={onLoginSubmit}
    />
  )
}

export default LoginPage
