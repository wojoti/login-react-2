import Button from '../../atoms/Button/Button'
import Column from '../../atoms/Column/Column'
import Link from '../../atoms/Link/Link'
import Row from '../../atoms/Row/Row'
import CheckboxField from '../../molecules/CheckboxField/CheckboxField'
import TextField from '../../molecules/TextField/TextField'
type Props = {
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>
  onRememberChange: React.ChangeEventHandler<HTMLInputElement>
  onLoginSubmit: React.MouseEventHandler<HTMLInputElement>
}
const LoginForm = (props: Props) => {
  return (
    <>
      <Column mt={15}>
        <TextField
          type='email'
          name='Email'
          id='email'
          onFieldChange={props.onEmailChange}
        ></TextField>
      </Column>
      <Column mt={15}>
        <TextField
          type='password'
          name='Password'
          id='password'
          onFieldChange={props.onPasswordChange}
        ></TextField>
      </Column>
      <Row mt={10} items='center'>
        <CheckboxField
          name='remember'
          id='remember'
          label='Remember Me?'
          onChange={props.onRememberChange}
        ></CheckboxField>
      </Row>
      <Column mt={15}>
        <Button id='login-submit' name='login-submit' onClick={props.onLoginSubmit}>
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
