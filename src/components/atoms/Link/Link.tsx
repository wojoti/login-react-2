import React from 'react'
import { StyledLink } from './Link.style'

interface Props {
  children?: React.ReactNode
  decoration?: string
  href: string
  color?: string
}

const Link = (props: Props) => {
  return (
    <StyledLink
      decoration={props.decoration}
      href={props.href}
      color={props.color}
    >
      {props.children}
    </StyledLink>
  )
}

export default Link
