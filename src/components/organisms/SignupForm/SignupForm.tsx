import { SyntheticEvent, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Column from '../../atoms/Column/Column'
import TextField from '../../molecules/TextField/TextField'

const SignupForm = () => {
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
    <>
      <Column mt={15}>
        <TextField type='email' name='Email' id='email' onFieldChange={onEmailChange}></TextField>
      </Column>
      <Column mt={15}>
        <TextField
          type='password'
          name='Password'
          id='password'
          onFieldChange={onPasswordChange}
        ></TextField>
      </Column>
      <Column mt={15}>
        <Button id='signup-submit' name='signup-submit' onClick={onSignupSubmit}>
          SIGN UP
        </Button>
      </Column>
    </>
  )
}

export default SignupForm
