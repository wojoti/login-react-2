import React, { useState } from "react";
import Column from "../components/Column/Column";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import TextInput from "../components/TextInput/TextInput";
import Label from "../components/Label/Label";
import Row from "../components/Row/Row";
import Checkbox from "../components/Checkbox/Checkbox";
import Button from "../components/Button/Button";
import Link from "../components/Link/Link";
import Breakline from "../components/Breakline/Breakline";
import { Icon, IconType } from "../components/Icon/Icon";
import IconCircle from "../components/IconCircle/IconCircle";

type Props = {};

const LoginPage = (props: Props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const onFieldChange = (event: any) => {
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setState({ ...state, [event.target.id]: value });
  };

  const onLoginSubmit = (event: any) => {
    event.preventDefault();
    const completeAction = { ...state, action: event.target.id };
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
          onFieldChange={onFieldChange}
        ></TextInput>
      </Column>
      <Column mt={15}>
        <Label>Password</Label>
        <TextInput
          type="password"
          name="password"
          id="password"
          onFieldChange={onFieldChange}
        ></TextInput>
      </Column>
      <Row mt={10} items={"center"}>
        <Checkbox
          name="remember"
          id="remember"
          onFieldChange={onFieldChange}
        ></Checkbox>
        <Label>Remember me?</Label>
      </Row>
      <Column mt={15}>
        <Button
          id={"login-submit"}
          name={"login-submit"}
          onSubmit={onLoginSubmit}
        >
          LOGIN
        </Button>
      </Column>
      <Column items={"flex-end"}>
        <Link decoration={"none"} goto={"/"} color={"rgb(107 114 128)"}>
          Forgot Password?
        </Link>
      </Column>
      <Column mt={30} mb={30}>
        <Breakline>OR</Breakline>
      </Column>
      <Row justify="center">
        <IconCircle accent={"#DE5246"}>
          <Icon type={IconType.google} w={13} h={13} alt={"google"}></Icon>
        </IconCircle>
        <IconCircle accent={"#1877f2"}>
          <Icon type={IconType.facebook} w={13} h={13} alt={"facebook"}></Icon>
        </IconCircle>
        <IconCircle accent={"#0077B5"}>
          <Icon type={IconType.linkedin} w={13} h={13} alt={"linkedin"}></Icon>
        </IconCircle>
      </Row>
      <Row justify="center" mt={28}>
        <Label color={"rgb(107 114 128)"}>
          Need an account? <Link goto={"/signup"}>SIGN UP</Link>
        </Label>
      </Row>
    </Container>
  );
};

export default LoginPage;
