import React, {
  ChangeEvent,
  MouseEventHandler,
  SyntheticEvent,
  useState,
} from "react";
import Column from "../components/atoms/Column/Column";
import Container from "../components/atoms/Container/Container";
import Header from "../components/atoms/Header/Header";
import TextInput from "../components/atoms/TextInput/TextInput";
import Label from "../components/atoms/Label/Label";
import Button from "../components/atoms/Button/Button";
import Link from "../components/atoms/Link/Link";
import Breakline from "../components/molecules/Breakline/Breakline";
import { Icon, IconType } from "../components/atoms/Icon/Icon";
import IconCircle from "../components/molecules/IconCircle/IconCircle";
import Row from "../components/atoms/Row/Row";

type Props = {};

const SignupPage = (props: Props) => {
  const [emailState, setEmailState] = useState({ email: "" });
  const [passwordState, setPasswordState] = useState({ password: "" });

  const onEmailChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setEmailState({
      ...emailState,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onPasswordChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setPasswordState({
      ...passwordState,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  };

  const onSignupSubmit = (event: SyntheticEvent<HTMLInputElement>) => {
    //event.preventDefault(); //zbedne jezeli nie uzywam form
    const completeAction = {
      ...emailState,
      ...passwordState,
      action: event.currentTarget,
    };
    console.log(completeAction);
  };
  return (
    <Container>
      <Header>SIGN UP</Header>
      <Column mt={15}>
        <Label>Email</Label>
        <TextInput
          type="email"
          name="email"
          id="email"
          onFieldChange={onEmailChange}
        ></TextInput>
      </Column>
      <Column mt={15}>
        <Label>Password</Label>
        <TextInput
          type="password"
          name="password"
          id="password"
          onFieldChange={onPasswordChange}
        ></TextInput>
      </Column>
      <Column mt={15}>
        <Button
          id="signup-submit"
          name="signup-submit"
          onClick={onSignupSubmit}
        >
          SIGN UP
        </Button>
      </Column>
      <Column mt={30} mb={35}>
        <Breakline>OR</Breakline>
      </Column>
      <Row justify="center">
        <IconCircle color="#DE5246">
          <Icon
            type={IconType.google}
            width={13}
            height={13}
            alt="google"
          ></Icon>
        </IconCircle>
        <IconCircle color="#1877f2">
          <Icon
            type={IconType.facebook}
            width={13}
            height={13}
            alt="facebook"
          ></Icon>
        </IconCircle>
        <IconCircle color="#0077B5">
          <Icon
            type={IconType.linkedin}
            width={13}
            height={13}
            alt="linkedin"
          ></Icon>
        </IconCircle>
      </Row>
      <Row justify="center" mt={28}>
        <Label color="rgb(107 114 128)">
          Already a user? <Link href="/">LOGIN</Link>
        </Label>
      </Row>
    </Container>
  );
};

export default SignupPage;
