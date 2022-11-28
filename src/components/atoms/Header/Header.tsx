import React from 'react'
import { StyledHeader } from './Header.style'

interface Props {
  children?: React.ReactNode
}

const Header = (props: Props) => {
  return <StyledHeader>{props.children}</StyledHeader>
}

export default Header
