import Button from "@atoms/Button/Button";
import Column from "@atoms/Column/Column";
import Link from "@atoms/Link/Link";
import Row from "@atoms/Row/Row";
import CheckboxArea from "@molecules/CheckboxArea/CheckboxArea";
import TextInput from "@molecules/TextInput/TextInput";
import { forwardRef, useImperativeHandle, useRef } from "react";

type LoginFormProps = {
  onLoginSubmit: (email: string, password: string, rememberMe: boolean) => void;
};

export type LoginFormHandle = {
  focus: () => void;
};
const LoginForm = forwardRef<LoginFormHandle, LoginFormProps>(
  ({ onLoginSubmit }, ref) => {
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
      []
    );
    const onSubmit = () => {
      onLoginSubmit(
        emailRef.current!.value,
        passwordRef.current!.value,
        rememberRef.current!.checked
      );
    };
    return (
      <>
        <Column mt={15}>
          <TextInput type="email" name="Email" id="email" ref={emailRef} />
        </Column>
        <Column mt={15}>
          <TextInput
            type="password"
            name="Password"
            id="password"
            ref={passwordRef}
          />
        </Column>
        <Row mt={10} align="center">
          <CheckboxArea
            name="remember"
            id="remember"
            label="Remember Me?"
            ref={rememberRef}
          />
        </Row>
        <Column mt={15}>
          <Button name="LOGIN" onClick={onSubmit} />
        </Column>

        <Column align="flex-end">
          <Link decoration="none" href="/" color="rgb(107 114 128)">
            Forgot Password?
          </Link>
        </Column>
      </>
    );
  }
);
LoginForm.displayName = "LoginForm";

export default LoginForm;
