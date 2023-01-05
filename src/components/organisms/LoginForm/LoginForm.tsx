import Button from "@components/atoms/Button/Button";
import Column from "@components/atoms/Column/Column";
import LinkB from "@components/atoms/Link/Link";
import Row from "@components/atoms/Row/Row";
import CheckboxArea from "@components/molecules/CheckboxArea/CheckboxArea";
import TextInput from "@components/molecules/TextInput/TextInput";
import {
  forwardRef,
  SyntheticEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Wrapper from "./LoginForm.style";

export interface LoginFormProps {
  onLoginSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onLinkClick: (path: string) => void;
  testId?: string;
}

export type LoginFormHandle = {
  focus: () => void;
};
const LoginForm = forwardRef<LoginFormHandle, LoginFormProps>(
  ({ onLoginSubmit, onLinkClick, testId }, ref) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const rememberRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [emailRegex, setEmailRegex] = useState(true);
    const [password, setPassword] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
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
    const onEmailChange = (event: SyntheticEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value);
      setEmailRegex(
        !!(
          /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(
            event.currentTarget.value
          ) || event.currentTarget.value.length === 0
        )
      );
    };
    const onPasswordChange = (event: SyntheticEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value);
    };

    useEffect(() => {
      setButtonDisabled(!!(email === "" || password === "" || !emailRegex));
    }, [email, password, emailRegex]);

    return (
      <Wrapper data-testid={testId}>
        <Column mt={15}>
          <TextInput
            type="email"
            name="Email"
            id="email"
            onChange={onEmailChange}
            isValid={emailRegex}
            testId="loginform-textinput-login"
            ref={emailRef}
          />
        </Column>
        <Column mt={15}>
          <TextInput
            type="password"
            name="Password"
            id="password"
            onChange={onPasswordChange}
            testId="loginform-textinput-password"
            ref={passwordRef}
          />
        </Column>
        <Row mt={10} align="center">
          <CheckboxArea
            name="remember"
            id="remember"
            label="Remember Me?"
            testId="loginform-CheckboxArea"
            ref={rememberRef}
          />
        </Row>
        <Column mt={15}>
          <Button
            name="LOGIN"
            onClick={onSubmit}
            testId="login-button-id"
            disabled={buttonDisabled}
          />
        </Column>

        <Column align="flex-end">
          <LinkB
            decoration="none"
            color="rgb(107 114 128)"
            onClick={onClick}
            testId="loginform-link"
          >
            Forgot Password?
          </LinkB>
        </Column>
      </Wrapper>
    );
  }
);
LoginForm.displayName = "LoginForm";

export default LoginForm;
