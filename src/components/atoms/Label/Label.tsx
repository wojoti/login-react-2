import React from 'react'
import { StyledLabel } from './Label.style'

interface Props {
  children?: React.ReactNode
  color?: string
}

const Label = (props: Props) => {
  return <StyledLabel color={props.color}>{props.children}</StyledLabel>
}

export default Label
