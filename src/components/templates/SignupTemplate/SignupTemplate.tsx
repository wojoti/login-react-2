import Link from '../../atoms/Link/Link'
import Column from '../../atoms/Column/Column'
import Container from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import Label from '../../atoms/Label/Label'
import Row from '../../atoms/Row/Row'
import Breakline from '../../molecules/Breakline/Breakline'
import SignupForm from '../../organisms/SignupForm/SignupForm'
import SocialIcons from '../../organisms/SocialIcons/SocialIcons'

const SignupTemplate = () => {
  return (
    <Container>
      <Header>SIGN UP</Header>
      <SignupForm />
      <Column mt={30} mb={35}>
        <Breakline>OR</Breakline>
      </Column>
      <SocialIcons />
      <Row justify="center" mt={28}>
        <Label color="rgb(107 114 128)">
          Already a user? <Link href="/">LOGIN</Link>
        </Label>
      </Row>
    </Container>
  )
}

export default SignupTemplate
