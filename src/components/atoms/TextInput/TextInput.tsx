import React from 'react'
import { StyledTextInput } from './TextInput.style'

interface Props {
  type: string
  name: string
  id: string
  onFieldChange?: React.ChangeEventHandler<HTMLInputElement>
}
export type Ref = HTMLInputElement

// const TextInput = (props: Props) => {
//   return (
//     <StyledTextInput
//       type={props.type}
//       name={props.name}
//       id={props.id}
//       onChange={props.onFieldChange}
//       ref={ref}
//     ></StyledTextInput>
//   )
// }

const TextInput = React.forwardRef<Ref, Props>((props, ref) => (
  <StyledTextInput
    type={props.type}
    name={props.name}
    id={props.id}
    onChange={props.onFieldChange}
    ref={ref}
  ></StyledTextInput>
))
TextInput.displayName = 'TextInput'

export default TextInput
