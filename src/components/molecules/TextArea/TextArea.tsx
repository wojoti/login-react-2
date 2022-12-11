import React from 'react';
import Label from '../../atoms/Label/Label';
import TextField, { Ref } from '../../atoms/TextField/TextField';

type Props = {
  type: string
  name: string
  id: string
  onFieldChange?: React.ChangeEventHandler<HTMLInputElement>
};

const TextArea = React.forwardRef<Ref, Props>((props, ref) => (
  <>
    <Label>{props.name}</Label>
    <TextField
      type={props.type}
      name={props.name}
      id={props.id}
      onFieldChange={props.onFieldChange}
      ref={ref}
    />
  </>
));
TextArea.displayName = 'TextArea';

// const TextField = (props: Props) => {
//   const ref = React.createRef<HTMLInputElement>()
//   return (
//     <>
//       <Label>{props.name}</Label>
//       <TextInput
//         type={props.type}
//         name={props.name}
//         id={props.id}
//         onFieldChange={props.onFieldChange}
//         ref={ref}
//       ></TextInput>
//     </>
//   )
// }

export default TextArea;
