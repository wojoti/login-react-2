import { SyntheticEvent, useState } from 'react'
import SignupTemplate from '../components/templates/SignupTemplate/SignupTemplate'

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const onPasswordChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const onSignupSubmit = (event: SyntheticEvent<HTMLInputElement>) => {
    // event.preventDefault(); //don't use preventDefault when not using form
    const completeAction = {
      email,
      password,
      action: event.currentTarget,
    }
    console.log(completeAction)
  }
  return (
    <SignupTemplate
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onSignupSubmit={onSignupSubmit}
    />
  )
}

export default SignupPage
