import Column from '../../atoms/Column/Column'
import Container from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import Label from '../../atoms/Label/Label'
import Link from '../../atoms/Link/Link'
import Row from '../../atoms/Row/Row'
import Breakline from '../../molecules/Breakline/Breakline'
import LoginForm from '../../organisms/LoginForm/LoginForm'
import SocialIcons from '../../organisms/SocialIcons/SocialIcons'
type Props = {
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>
  onRememberChange: React.ChangeEventHandler<HTMLInputElement>
  onLoginSubmit: React.MouseEventHandler<HTMLInputElement>
}
const LoginTemplate = (props: Props) => {
  return (
    <Container>
      <Header>LOGIN</Header>
      <LoginForm
        onEmailChange={props.onEmailChange}
        onPasswordChange={props.onPasswordChange}
        onRememberChange={props.onRememberChange}
        onLoginSubmit={props.onLoginSubmit}
      />
      <Column mt={30} mb={30}>
        <Breakline>OR</Breakline>
      </Column>
      <SocialIcons />
      <Row justify='center' mt={28}>
        <Label color='rgb(107 114 128)'>
          Need an account? <Link href='/signup'>SIGN UP</Link>
        </Label>
      </Row>
    </Container>
  )
}

export default LoginTemplate
