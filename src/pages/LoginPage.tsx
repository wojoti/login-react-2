import React from "react";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Label from "../components/Label/Label";

type Props = {};

const onSubmitLoginForm = () => {};

const LoginPage = (props: Props) => {
  return (
    <Container>
      <Header>LOGIN</Header>
      <Label>Email</Label>
    </Container>
  );
};

export default LoginPage;
