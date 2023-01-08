import {
  Column,
  Container,
  Header,
  Label,
  LinkB,
  Row,
} from "@components/atoms";
import { Breakline } from "@components/molecules";
import {
  SignupForm,
  SignupFormHandle,
  SocialIcons,
} from "@components/organisms";
import { useEffect, useRef } from "react";

export interface SignupTemplateProps {
  onSignupSubmit: (email: string, password: string) => void;
  onIconClick: (icon: string) => void;
  onLinkClick: (path: string) => void;
  testId?: string;
}
function SignupTemplate({
  onSignupSubmit,
  onIconClick,
  onLinkClick,
  testId,
}: SignupTemplateProps) {
  const signupFormRef = useRef<SignupFormHandle>(null);

  useEffect(() => {
    signupFormRef.current?.focus();
  }, []);

  const onClick = () => {
    onLinkClick("/");
  };
  return (
    <Container testId={testId}>
      <Header testId="signuptemplate-header">SIGN UP</Header>
      <SignupForm
        onSignupSubmit={onSignupSubmit}
        ref={signupFormRef}
        testId="signuptemplate-loginform"
      />
      <Column mt={30} mb={35}>
        <Breakline testId="signuptemplate-breakline">OR</Breakline>
      </Column>
      <SocialIcons
        onIconClick={onIconClick}
        testId="signuptemplate-socialicons"
      />
      <Row justify="center" mt={28}>
        <Label color="rgb(107 114 128)">
          Already a user?{" "}
          <LinkB onClick={onClick} testId="signuptemplate-link">
            LOGIN
          </LinkB>
        </Label>
      </Row>
    </Container>
  );
}

SignupTemplate.displayName = "SignupTemplate";

export default SignupTemplate;
