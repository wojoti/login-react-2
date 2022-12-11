import { forwardRef, useImperativeHandle, useRef } from 'react'
import Button from '../../atoms/Button/Button'
import Column from '../../atoms/Column/Column'
import TextArea from '../../molecules/TextArea/TextArea'
type SignupFormProps = {
  onSignupSubmit: (email: string, password: string) => void
}

export type SignupFormHandle = {
  focus: () => void
}
const SignupForm = forwardRef<SignupFormHandle, SignupFormProps>((props, ref) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        emailRef.current?.focus()
      },
    }),
    [],
  )
  const onSubmit = () => {
    props.onSignupSubmit(emailRef.current!.value, passwordRef.current!.value)
  }
  return (
    <>
      <Column mt={15}>
        <TextArea type='email' name='Email' id='email' ref={emailRef}></TextArea>
      </Column>
      <Column mt={15}>
        <TextArea type='password' name='Password' id='password' ref={passwordRef}></TextArea>
      </Column>
      <Column mt={15}>
        <Button id='signup-submit' name='signup-submit' onClick={onSubmit}>
          SIGN UP
        </Button>
      </Column>
    </>
  )
})
SignupForm.displayName = 'SignupForm'

export default SignupForm
