import Column from "@atoms/Column/Column";
import Container from "@atoms/Container/Container";
import Header from "@atoms/Header/Header";
import Label from "@atoms/Label/Label";
import Link from "@atoms/Link/Link";
import Row from "@atoms/Row/Row";
import Breakline from "@molecules/Breakline/Breakline";
import SignupForm, { SignupFormHandle } from "@organisms/SignupForm/SignupForm";
import SocialIcons from "@organisms/SocialIcons/SocialIcons";
import { useEffect, useRef } from "react";

type Props = {
  onSignupSubmit: (email: string, password: string) => void;
  onIconClick: (icon: string) => void;
};
function SignupTemplate({ onSignupSubmit, onIconClick }: Props) {
  const signupFormRef = useRef<SignupFormHandle>(null);

  useEffect(() => {
    signupFormRef.current?.focus();
  }, []);
  return (
    <Container>
      <Header>SIGN UP</Header>
      <SignupForm onSignupSubmit={onSignupSubmit} />
      <Column mt={30} mb={35}>
        <Breakline>OR</Breakline>
      </Column>
      <SocialIcons onIconClick={onIconClick} />
      <Row justify="center" mt={28}>
        <Label color="rgb(107 114 128)">
          Already a user? <Link href="/">LOGIN</Link>
        </Label>
      </Row>
    </Container>
  );
}

SignupTemplate.displayName = "SignupTemplate";

export default SignupTemplate;
