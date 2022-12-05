import React from 'react'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Label from '../../atoms/Label/Label'
import { Ref } from '../../atoms/TextInput/TextInput'

type Props = {
  name: string
  id: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label: string
}

const CheckboxField = React.forwardRef<Ref, Props>((props, ref) => (
  <>
    <Checkbox name={props.name} id={props.id} onChange={props.onChange} ref={ref}></Checkbox>
    <Label>{props.label}</Label>
  </>
))
CheckboxField.displayName = 'CheckboxField'

// const CheckboxField = (props: Props) => {
//   return (
//     <>
//       <Checkbox name={props.name} id={props.id} onChange={props.onChange}></Checkbox>
//       <Label>{props.label}</Label>
//     </>
//   )
// }

export default CheckboxField
