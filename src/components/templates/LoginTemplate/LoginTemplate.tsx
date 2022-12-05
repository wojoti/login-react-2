import { forwardRef } from 'react'
import Column from '../../atoms/Column/Column'
import Container from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import Label from '../../atoms/Label/Label'
import Link from '../../atoms/Link/Link'
import Row from '../../atoms/Row/Row'
import Breakline from '../../molecules/Breakline/Breakline'
import LoginForm, { RefHandler } from '../../organisms/LoginForm/LoginForm'
import SocialIcons from '../../organisms/SocialIcons/SocialIcons'
type Props = { onLoginSubmit: React.MouseEventHandler<HTMLInputElement> }
const LoginTemplate = forwardRef<RefHandler, Props>((props, ref) => {
  return (
    <Container>
      <Header>LOGIN</Header>
      <LoginForm ref={ref} onLoginSubmit={props.onLoginSubmit} />
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
})
LoginTemplate.displayName = 'LoginTemplate'

export default LoginTemplate
