import React from 'react'
import Label from '../../atoms/Label/Label'
import TextInput from '../../atoms/TextInput/TextInput'

type Props = {
  type: string
  name: string
  id: string
  color?: string
  onFieldChange?: React.ChangeEventHandler<HTMLInputElement>
}

const TextField = (props: Props) => {
  const ref = React.createRef<HTMLInputElement>()
  return (
    <>
      <Label>{props.name}</Label>
      <TextInput
        type={props.type}
        name={props.name}
        id={props.id}
        onFieldChange={props.onFieldChange}
        ref={ref}
      ></TextInput>
    </>
  )
}

export default TextField
