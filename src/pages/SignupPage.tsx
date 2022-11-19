import React, { useState } from "react";
import Column from "../components/Column/Column";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import TextInput from "../components/TextInput/TextInput";
import Label from "../components/Label/Label";
import Button from "../components/Button/Button";

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
      <Column mt={15}>
        <Button
          id={"signup-submit"}
          name={"signup-submit"}
          onSubmit={onSignupSubmit}
        >
          SIGN UP
        </Button>
      </Column>
    </Container>
  );
};

export default SignupPage;
