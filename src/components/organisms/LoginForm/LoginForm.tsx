import { SyntheticEvent, useState } from 'react'
import Button from '../../atoms/Button/Button'
import Column from '../../atoms/Column/Column'
import Link from '../../atoms/Link/Link'
import Row from '../../atoms/Row/Row'
import CheckboxField from '../../molecules/CheckboxField/CheckboxField'
import TextField from '../../molecules/TextField/TextField'

const LoginForm = () => {
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
      <Row mt={10} items='center'>
        <CheckboxField
          name='remember'
          id='remember'
          label='Remember Me?'
          onChange={onRememberChange}
        ></CheckboxField>
      </Row>
      <Column mt={15}>
        <Button id='login-submit' name='login-submit' onClick={onLoginSubmit}>
          LOGIN
        </Button>
      </Column>

      <Column items='flex-end'>
        <Link decoration='none' href='/' color='rgb(107 114 128)'>
          Forgot Password?
        </Link>
      </Column>
    </>
  )
}

export default LoginForm
