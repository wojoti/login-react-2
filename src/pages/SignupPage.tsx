import React, { useState } from "react";
import Column from "../components/Column/Column";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import TextInput from "../components/TextInput/TextInput";
import Label from "../components/Label/Label";
import Button from "../components/Button/Button";
import Link from "../components/Link/Link";
import Breakline from "../components/Breakline/Breakline";
import { Icon, IconType } from "../components/Icon/Icon";
import IconCircle from "../components/IconCircle/IconCircle";
import Row from "../components/Row/Row";

type Props = {};

const SignupPage = (props: Props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onFieldChange = (event: any) => {
    let value = event.target.value;
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setState({ ...state, [event.target.id]: value });
  };

  const onSignupSubmit = (event: any) => {
    event.preventDefault();
    const completeAction = { ...state, action: event.target.id };
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
      <Column mt={15}>
        <Button
          id={"signup-submit"}
          name={"signup-submit"}
          onSubmit={onSignupSubmit}
        >
          SIGN UP
        </Button>
      </Column>
      <Column mt={30} mb={35}>
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
          Already a user? <Link goto={"/"}>LOGIN</Link>
        </Label>
      </Row>
    </Container>
  );
};

export default SignupPage;
