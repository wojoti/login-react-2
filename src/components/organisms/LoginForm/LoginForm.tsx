import { forwardRef, RefObject, useImperativeHandle, useRef } from 'react'
import Button from '../../atoms/Button/Button'
import Column from '../../atoms/Column/Column'
import Link from '../../atoms/Link/Link'
import Row from '../../atoms/Row/Row'
import CheckboxField from '../../molecules/CheckboxField/CheckboxField'
import TextField from '../../molecules/TextField/TextField'
type Props = { onLoginSubmit: React.MouseEventHandler<HTMLInputElement> }

export type RefHandler = {
  emailRef: RefObject<HTMLInputElement>
  passwordRef: RefObject<HTMLInputElement>
  rememberRef: RefObject<HTMLInputElement>
}
// eslint-disable-next-line
const LoginForm = forwardRef<RefHandler, Props>((props, ref) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const rememberRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    emailRef: emailRef,
    passwordRef: passwordRef,
    rememberRef: rememberRef,
  }))
  return (
    <>
      <Column mt={15}>
        <TextField type='email' name='Email' id='email' ref={emailRef}></TextField>
      </Column>
      <Column mt={15}>
        <TextField type='password' name='Password' id='password' ref={passwordRef}></TextField>
      </Column>
      <Row mt={10} items='center'>
        <CheckboxField
          name='remember'
          id='remember'
          label='Remember Me?'
          ref={rememberRef}
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
})
LoginForm.displayName = 'LoginForm'

// const LoginForm = (props: Props) => {

//   return (
//     <>
//       <Column mt={15}>
//         <TextField type='email' name='Email' id='email' ref={emailRef}></TextField>
//       </Column>
//       <Column mt={15}>
//         <TextField type='password' name='Password' id='password' ref={pwdRef}></TextField>
//       </Column>
//       <Row mt={10} items='center'>
//         <CheckboxField
//           name='remember'
//           id='remember'
//           label='Remember Me?'
//           onChange={props.onRememberChange}
//         ></CheckboxField>
//       </Row>
//       <Column mt={15}>
//         <Button id='login-submit' name='login-submit' onClick={props.onLoginSubmit}>
//           LOGIN
//         </Button>
//       </Column>

//       <Column items='flex-end'>
//         <Link decoration='none' href='/' color='rgb(107 114 128)'>
//           Forgot Password?
//         </Link>
//       </Column>
//     </>
//   )
// }

export default LoginForm
