import React from 'react'
import Link from '../../atoms/Link/Link'
import Column from '../../atoms/Column/Column'
import Container from '../../atoms/Container/Container'
import Header from '../../atoms/Header/Header'
import Label from '../../atoms/Label/Label'
import Row from '../../atoms/Row/Row'
import Breakline from '../../molecules/Breakline/Breakline'
import LoginForm from '../../organisms/LoginForm/LoginForm'
import SocialIcons from '../../organisms/SocialIcons/SocialIcons'

const LoginTemplate = () => {
  return (
    <Container>
      <Header>LOGIN</Header>
      <LoginForm />
      <Column mt={30} mb={30}>
        <Breakline>OR</Breakline>
      </Column>
      <SocialIcons />
      <Row justify="center" mt={28}>
        <Label color="rgb(107 114 128)">
          Need an account? <Link href="/signup">SIGN UP</Link>
        </Label>
      </Row>
    </Container>
  )
}

export default LoginTemplate
