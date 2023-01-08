import { Button, Column } from "@components/atoms";
import { TextInput } from "@components/molecules";
import {
  forwardRef,
  SyntheticEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import Wrapper from "./SignupForm.style";

export interface SignupFormProps {
  onSignupSubmit: (email: string, password: string) => void;
  testId?: string;
}

export type SignupFormHandle = {
  focus: () => void;
};
const SignupForm = forwardRef<SignupFormHandle, SignupFormProps>(
  ({ onSignupSubmit, testId }, ref) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

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
      onSignupSubmit(emailRef.current!.value, passwordRef.current!.value);
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
            testId="signupform-textinput-login"
            ref={emailRef}
          />
        </Column>
        <Column mt={15}>
          <TextInput
            type="password"
            name="Password"
            id="password"
            onChange={onPasswordChange}
            testId="signupform-textinput-password"
            ref={passwordRef}
          />
        </Column>
        <Column mt={15}>
          <Button
            name="SIGN UP"
            onClick={onSubmit}
            testId="signup-button-id"
            disabled={buttonDisabled}
          />
        </Column>
      </Wrapper>
    );
  }
);
SignupForm.displayName = "SignupForm";

export default SignupForm;
