import Checkbox from '../../atoms/Checkbox/Checkbox'
import Label from '../../atoms/Label/Label'

type Props = {
  name: string
  id: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label: string
}

const CheckboxField = (props: Props) => {
  return (
    <>
      <Checkbox name={props.name} id={props.id} onChange={props.onChange}></Checkbox>
      <Label>{props.label}</Label>
    </>
  )
}

export default CheckboxField
