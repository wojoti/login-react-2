import React from 'react';
import StyledTextField from './TextField.style';

interface Props {
  type: string
  name: string
  id: string
  onFieldChange?: React.ChangeEventHandler<HTMLInputElement>
}
export type Ref = HTMLInputElement;

const TextField = React.forwardRef<Ref, Props>((props, ref) => (
  <StyledTextField
    type={props.type}
    name={props.name}
    id={props.id}
    onChange={props.onFieldChange}
    ref={ref}
  />
));
TextField.displayName = 'TextField';

export default TextField;
