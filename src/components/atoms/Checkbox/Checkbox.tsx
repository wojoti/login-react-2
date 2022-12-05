import React from 'react'
import { StyledCheckbox } from './Checkbox.style'

interface Props {
  name: string
  id: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export type Ref = HTMLInputElement

const Checkbox = React.forwardRef<Ref, Props>((props, ref) => (
  <StyledCheckbox
    type='checkbox'
    name={props.name}
    id={props.id}
    value={props.value}
    onChange={props.onChange}
    ref={ref}
  />
))
Checkbox.displayName = 'Checkbox'

// const Checkbox = (props: Props) => {
//   return (
//     <StyledCheckbox
//       type='checkbox'
//       name={props.name}
//       id={props.id}
//       value={props.value}
//       onChange={props.onChange}
//     />
//   )
// }

export default Checkbox
