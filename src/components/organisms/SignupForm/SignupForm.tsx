import Button from "@components/atoms/Button/Button";
import Column from "@components/atoms/Column/Column";
import TextInput from "@components/molecules/TextInput/TextInput";
import { forwardRef, useImperativeHandle, useRef } from "react";

type SignupFormProps = {
  onSignupSubmit: (email: string, password: string) => void;
};

export type SignupFormHandle = {
  focus: () => void;
};
const SignupForm = forwardRef<SignupFormHandle, SignupFormProps>(
  ({ onSignupSubmit }, ref) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
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
        <Column mt={15}>
          <Button name="SIGN UP" onClick={onSubmit} testId="submit-button-id" />
        </Column>
      </>
    );
  }
);
SignupForm.displayName = "SignupForm";

export default SignupForm;
