import React from 'react'
import { StyledTextInput } from './TextInput.style'

interface Props {
  type: string
  name: string
  id: string
  onFieldChange?: React.ChangeEventHandler<HTMLInputElement>
}

const TextInput = (props: Props) => {
  return (
    <StyledTextInput
      type={props.type}
      name={props.name}
      id={props.id}
      onChange={props.onFieldChange}
    ></StyledTextInput>
  )
}

export default TextInput
