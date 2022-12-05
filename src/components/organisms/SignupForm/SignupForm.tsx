import { forwardRef, RefObject, useImperativeHandle, useRef } from 'react'
import Button from '../../atoms/Button/Button'
import Column from '../../atoms/Column/Column'
import TextField from '../../molecules/TextField/TextField'
type Props = {
  onSignupSubmit: React.MouseEventHandler<HTMLInputElement>
}
export type RefHandler = {
  emailRef: RefObject<HTMLInputElement>
  passwordRef: RefObject<HTMLInputElement>
}
const SignupForm = forwardRef<RefHandler, Props>((props, ref) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    emailRef: emailRef,
    passwordRef: passwordRef,
  }))
  return (
    <>
      <Column mt={15}>
        <TextField type='email' name='Email' id='email' ref={emailRef}></TextField>
      </Column>
      <Column mt={15}>
        <TextField type='password' name='Password' id='password' ref={passwordRef}></TextField>
      </Column>
      <Column mt={15}>
        <Button id='signup-submit' name='signup-submit' onClick={props.onSignupSubmit}>
          SIGN UP
        </Button>
      </Column>
    </>
  )
})
SignupForm.displayName = 'SignupForm'

export default SignupForm
