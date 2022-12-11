import React from 'react'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Label from '../../atoms/Label/Label'
import { Ref } from '../../atoms/TextField/TextField'

type Props = {
  name: string
  id: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label: string
}

const CheckboxArea = React.forwardRef<Ref, Props>((props, ref) => (
  <>
    <Checkbox name={props.name} id={props.id} onChange={props.onChange} ref={ref}></Checkbox>
    <Label>{props.label}</Label>
  </>
))
CheckboxArea.displayName = 'CheckboxArea'

// const CheckboxArea = (props: Props) => {
//   return (
//     <>
//       <Checkbox name={props.name} id={props.id} onChange={props.onChange}></Checkbox>
//       <Label>{props.label}</Label>
//     </>
//   )
// }

export default CheckboxArea
