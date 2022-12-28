import Button from "@components/atoms/Button/Button";
import Column from "@components/atoms/Column/Column";
import Link from "@components/atoms/Link/Link";
import Row from "@components/atoms/Row/Row";
import CheckboxArea from "@components/molecules/CheckboxArea/CheckboxArea";
import TextInput from "@components/molecules/TextInput/TextInput";
import { forwardRef, useImperativeHandle, useRef } from "react";

type LoginFormProps = {
  onLoginSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onLinkClick: (path: string) => void;
};

export type LoginFormHandle = {
  focus: () => void;
};
const LoginForm = forwardRef<LoginFormHandle, LoginFormProps>(
  ({ onLoginSubmit, onLinkClick }, ref) => {
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
    const onClick = () => {
      onLinkClick("/signup");
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
          <Link
            decoration="none"
            href="/"
            color="rgb(107 114 128)"
            onClick={onClick}
          >
            Forgot Password?
          </Link>
        </Column>
      </>
    );
  }
);
LoginForm.displayName = "LoginForm";

export default LoginForm;
