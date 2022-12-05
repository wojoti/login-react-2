import Button from '../../atoms/Button/Button'
import Column from '../../atoms/Column/Column'
import TextField from '../../molecules/TextField/TextField'
type Props = {
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>
  onSignupSubmit: React.MouseEventHandler<HTMLInputElement>
}
const SignupForm = (props: Props) => {
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
      <Column mt={15}>
        <Button id='signup-submit' name='signup-submit' onClick={props.onSignupSubmit}>
          SIGN UP
        </Button>
      </Column>
    </>
  )
}

export default SignupForm
