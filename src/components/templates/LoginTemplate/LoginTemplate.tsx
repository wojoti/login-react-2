import Column from "@components/atoms/Column/Column";
import Container from "@components/atoms/Container/Container";
import Header from "@components/atoms/Header/Header";
import Label from "@components/atoms/Label/Label";
import Row from "@components/atoms/Row/Row";
import Breakline from "@components/molecules/Breakline/Breakline";
import LoginForm, {
  LoginFormHandle,
} from "@components/organisms/LoginForm/LoginForm";
import SocialIcons from "@components/organisms/SocialIcons/SocialIcons";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type Props = {
  onLoginSubmit: (email: string, password: string, rememberMe: boolean) => void;
  onIconClick: (icon: string) => void;
  onLinkClick: (path: string) => void;
};
function LoginTemplate({ onLoginSubmit, onIconClick, onLinkClick }: Props) {
  const loginFormRef = useRef<LoginFormHandle>(null);

  useEffect(() => {
    loginFormRef.current?.focus();
  }, []);

  return (
    <Container>
      <Header>LOGIN</Header>
      <LoginForm onLoginSubmit={onLoginSubmit} onLinkClick={onLinkClick} />
      <Column mt={30} mb={30}>
        <Breakline>OR</Breakline>
      </Column>
      <SocialIcons onIconClick={onIconClick} />
      <Row justify="center" mt={28}>
        <Label color="rgb(107 114 128)">
          {/* Need an account? <Link href="/signup">SIGN UP</Link> */}
          Need an account? <Link to="/signup">SIGN UP</Link>
        </Label>
      </Row>
    </Container>
  );
}
LoginTemplate.displayName = "LoginTemplate";

export default LoginTemplate;
