import { RootState } from "@/store/store";
import {
  Column,
  Container,
  Header,
  Label,
  LinkB,
  Row,
} from "@components/atoms";
import { Breakline } from "@components/molecules";
import { LoginForm, LoginFormHandle, SocialIcons } from "@components/organisms";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export interface LoginTemplateProps {
  onLoginSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onIconClick: (icon: string) => void;
  onLinkClick: (path: string) => void;
  testId?: string;
}
function LoginTemplate({
  onLoginSubmit,
  onIconClick,
  onLinkClick,
  testId,
}: LoginTemplateProps) {
  const loginFormRef = useRef<LoginFormHandle>(null);

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    loginFormRef.current!.focus();
  }, []);

  const onClick = () => {
    onLinkClick("/signup");
  };

  return (
    <Container testId={testId}>
      <Header testId="logintemplate-header">LOGIN</Header>
      <LoginForm
        onLoginSubmit={onLoginSubmit}
        onLinkClick={onLinkClick}
        ref={loginFormRef}
        testId="logintemplate-loginform"
      />
      <Column mt={30} mb={30}>
        <Breakline testId="logintemplate-breakline">OR</Breakline>
      </Column>
      <SocialIcons
        onIconClick={onIconClick}
        testId="logintemplate-socialicons"
      />
      <Row justify="center" mt={28}>
        <Label color="rgb(107 114 128)">
          Need an account?{" "}
          <LinkB onClick={onClick} testId="logintemplate-link">
            SIGN UP
          </LinkB>
        </Label>
      </Row>
      {user.success ? (
        <div>
          <span>{JSON.stringify(user)}</span>
        </div>
      ) : null}
    </Container>
  );
}
LoginTemplate.displayName = "LoginTemplate";

export default LoginTemplate;
