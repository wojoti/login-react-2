import React, { SyntheticEvent, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Column from '../../atoms/Column/Column'
import Label from '../../atoms/Label/Label'
import Link from '../../atoms/Link/Link'
import Row from '../../atoms/Row/Row'
import TextInput from '../../atoms/TextInput/TextInput'

interface Props {}

const LoginForm = (props: Props) => {
  const [emailState, setEmailState] = useState({ email: '' })
  const [passwordState, setPasswordState] = useState({ password: '' })
  const [rememberState, setRememberState] = useState({ remember: false })

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

  const onRememberChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setRememberState({
      ...rememberState,
      [event.currentTarget.id]: event.currentTarget.checked
    })
  }

  const onLoginSubmit = (event: SyntheticEvent<HTMLInputElement>) => {
    // event.preventDefault(); //zbedne jezeli nie uzywam form
    const completeAction = {
      ...emailState,
      ...passwordState,
      ...rememberState,
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
      <Row mt={10} items="center">
        <Checkbox
          name="remember"
          id="remember"
          onChange={onRememberChange}
        ></Checkbox>
        <Label>Remember me?</Label>
      </Row>
      <Column mt={15}>
        <Button id="login-submit" name="login-submit" onClick={onLoginSubmit}>
          LOGIN
        </Button>
      </Column>

      <Column items="flex-end">
        <Link decoration="none" href="/" color="rgb(107 114 128)">
          Forgot Password?
        </Link>
      </Column>
    </>
  )
}

export default LoginForm
