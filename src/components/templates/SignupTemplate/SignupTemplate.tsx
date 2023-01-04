import Column from "@components/atoms/Column/Column";
import Container from "@components/atoms/Container/Container";
import Header from "@components/atoms/Header/Header";
import Label from "@components/atoms/Label/Label";
import LinkB from "@components/atoms/Link/Link";
import Row from "@components/atoms/Row/Row";
import Breakline from "@components/molecules/Breakline/Breakline";
import SignupForm, {
  SignupFormHandle,
} from "@components/organisms/SignupForm/SignupForm";
import SocialIcons from "@components/organisms/SocialIcons/SocialIcons";
import { useEffect, useRef } from "react";

type Props = {
  onSignupSubmit: (email: string, password: string) => void;
  onIconClick: (icon: string) => void;
  onLinkClick: (path: string) => void;
};
function SignupTemplate({ onSignupSubmit, onIconClick, onLinkClick }: Props) {
  const signupFormRef = useRef<SignupFormHandle>(null);

  useEffect(() => {
    signupFormRef.current?.focus();
  }, []);

  const onClick = () => {
    onLinkClick("/");
  };
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
          Already a user? <LinkB onClick={onClick}>LOGIN</LinkB>
        </Label>
      </Row>
    </Container>
  );
}

SignupTemplate.displayName = "SignupTemplate";

export default SignupTemplate;
