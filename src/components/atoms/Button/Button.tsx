import React from 'react'
import { StyledButton } from './Button.style'

interface Props {
  name: string
  id: string
  children?: string
  onClick?: React.MouseEventHandler<HTMLInputElement>
}

const Button = (props: Props) => {
  return (
    <StyledButton
      type="submit"
      name={props.name}
      id={props.id}
      value={props.children}
      onClick={props.onClick}
    />
  )
}

export default Button
