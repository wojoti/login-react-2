import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import Button from '../../atoms/Button/Button';
import Column from '../../atoms/Column/Column';
import Link from '../../atoms/Link/Link';
import Row from '../../atoms/Row/Row';
import CheckboxArea from '../../molecules/CheckboxArea/CheckboxArea';
import TextArea from '../../molecules/TextArea/TextArea';

type LoginFormProps = {
  onLoginSubmit: (email: string, password: string, rememberMe: boolean) => void
};

export type LoginFormHandle = {
  focus: () => void
};
const LoginForm = forwardRef<LoginFormHandle, LoginFormProps>((props, ref) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const rememberRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        emailRef.current?.focus();
      },
    }),
    [],
  );
  const onSubmit = () => {
    props.onLoginSubmit(
      emailRef.current!.value,
      passwordRef.current!.value,
      rememberRef.current!.checked,
    );
  };
  return (
    <>
      <Column mt={15}>
        <TextArea type="email" name="Email" id="email" ref={emailRef} />
      </Column>
      <Column mt={15}>
        <TextArea type="password" name="Password" id="password" ref={passwordRef} />
      </Column>
      <Row mt={10} items="center">
        <CheckboxArea
          name="remember"
          id="remember"
          label="Remember Me?"
          ref={rememberRef}
        />
      </Row>
      <Column mt={15}>
        <Button id="login-submit" name="login-submit" onClick={onSubmit}>
          LOGIN
        </Button>
      </Column>

      <Column items="flex-end">
        <Link decoration="none" href="/" color="rgb(107 114 128)">
          Forgot Password?
        </Link>
      </Column>
    </>
  );
});
LoginForm.displayName = 'LoginForm';

// const LoginForm = (props: Props) => {

//   return (
//     <>
//       <Column mt={15}>
//         <TextArea type='email' name='Email' id='email' ref={emailRef}></TextArea>
//       </Column>
//       <Column mt={15}>
//         <TextArea type='password' name='Password' id='password' ref={pwdRef}></TextArea>
//       </Column>
//       <Row mt={10} items='center'>
//         <CheckboxArea
//           name='remember'
//           id='remember'
//           label='Remember Me?'
//           onChange={props.onRememberChange}
//         ></CheckboxArea>
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

export default LoginForm;
