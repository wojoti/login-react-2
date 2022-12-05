import Column from '../../atoms/Column/Column'
import Container from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import Label from '../../atoms/Label/Label'
import Link from '../../atoms/Link/Link'
import Row from '../../atoms/Row/Row'
import Breakline from '../../molecules/Breakline/Breakline'
import SignupForm from '../../organisms/SignupForm/SignupForm'
import SocialIcons from '../../organisms/SocialIcons/SocialIcons'
type Props = {
  onEmailChange: React.ChangeEventHandler<HTMLInputElement>
  onPasswordChange: React.ChangeEventHandler<HTMLInputElement>
  onSignupSubmit: React.MouseEventHandler<HTMLInputElement>
}
const SignupTemplate = (props: Props) => {
  return (
    <Container>
      <Header>SIGN UP</Header>
      <SignupForm
        onEmailChange={props.onEmailChange}
        onPasswordChange={props.onPasswordChange}
        onSignupSubmit={props.onSignupSubmit}
      />
      <Column mt={30} mb={35}>
        <Breakline>OR</Breakline>
      </Column>
      <SocialIcons />
      <Row justify='center' mt={28}>
        <Label color='rgb(107 114 128)'>
          Already a user? <Link href='/'>LOGIN</Link>
        </Label>
      </Row>
    </Container>
  )
}

export default SignupTemplate
