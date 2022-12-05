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
  return (
    <>
      <Label>{props.name}</Label>
      <TextInput
        type={props.type}
        name={props.name}
        id={props.id}
        onFieldChange={props.onFieldChange}
      ></TextInput>
    </>
  )
}

export default TextField
