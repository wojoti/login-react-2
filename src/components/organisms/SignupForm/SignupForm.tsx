import React, { SyntheticEvent, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Column from '../../atoms/Column/Column'
import Label from '../../atoms/Label/Label'
import TextInput from '../../atoms/TextInput/TextInput'

interface Props {}

const SignupForm = (props: Props) => {
  const [emailState, setEmailState] = useState({ email: '' })
  const [passwordState, setPasswordState] = useState({ password: '' })

  const onEmailChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setEmailState({
      ...emailState,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const onPasswordChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setPasswordState({
      ...passwordState,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const onSignupSubmit = (event: SyntheticEvent<HTMLInputElement>) => {
    // event.preventDefault(); //zbedne jezeli nie uzywam form
    const completeAction = {
      ...emailState,
      ...passwordState,
      action: event.currentTarget
    }
    console.log(completeAction)
  }
  return (
    <>
      <Column mt={15}>
        <Label>Email</Label>
        <TextInput
          type="email"
          name="email"
          id="email"
          onFieldChange={onEmailChange}
        ></TextInput>
      </Column>
      <Column mt={15}>
        <Label>Password</Label>
        <TextInput
          type="password"
          name="password"
          id="password"
          onFieldChange={onPasswordChange}
        ></TextInput>
      </Column>
      <Column mt={15}>
        <Button
          id="signup-submit"
          name="signup-submit"
          onClick={onSignupSubmit}
        >
          SIGN UP
        </Button>
      </Column>
    </>
  )
}

export default SignupForm
