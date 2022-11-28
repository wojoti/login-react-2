import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import Column from "../components/atoms/Column/Column";
import Container from "../components/atoms/Container/Container";
import Header from "../components/atoms/Header/Header";
import TextInput from "../components/atoms/TextInput/TextInput";
import Label from "../components/atoms/Label/Label";
import Row from "../components/atoms/Row/Row";
import Checkbox from "../components/atoms/Checkbox/Checkbox";
import Button from "../components/atoms/Button/Button";
import Link from "../components/atoms/Link/Link";
import Breakline from "../components/molecules/Breakline/Breakline";
import { Icon, IconType } from "../components/atoms/Icon/Icon";
import IconCircle from "../components/molecules/IconCircle/IconCircle";
import { SyntheticEvent } from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const [emailState, setEmailState] = useState({ email: "" });
  const [passwordState, setPasswordState] = useState({ password: "" });
  const [rememberState, setRememberState] = useState({ remember: false });

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

  const onRememberChange = (event: SyntheticEvent<HTMLInputElement>) => {
    setRememberState({
      ...rememberState,
      [event.currentTarget.id]: event.currentTarget.checked,
    });
  };

  const onLoginSubmit = (event: SyntheticEvent<HTMLInputElement>) => {
    //event.preventDefault(); //zbedne jezeli nie uzywam form
    const completeAction = {
      ...emailState,
      ...passwordState,
      ...rememberState,
      action: event.currentTarget,
    };
    console.log(completeAction);
  };
  return (
    <Container>
      <Header>LOGIN</Header>
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
      <Row mt={10} items="center">
        <Checkbox
          name="remember"
          id="remember"
          onChange={onRememberChange}
        ></Checkbox>
        <Label>Remember me?</Label>
      </Row>
      <Column mt={15}>
        <Button id="login-submit" name="login-submit" onClick={onLoginSubmit}>
          LOGIN
        </Button>
      </Column>
      <Column items="flex-end">
        <Link decoration="none" href="/" color="rgb(107 114 128)">
          Forgot Password?
        </Link>
      </Column>
      <Column mt={30} mb={30}>
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
          Need an account? <Link href="/signup">SIGN UP</Link>
        </Label>
      </Row>
    </Container>
  );
};

export default LoginPage;
