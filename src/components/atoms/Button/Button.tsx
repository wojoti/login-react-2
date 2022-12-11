import React from 'react';
import StyledButton from './Button.style';

interface Props {
  name: string
  id: string
  children?: string
  onClick?: React.MouseEventHandler<HTMLInputElement>
}

export type Ref = HTMLInputElement;

const Button = React.forwardRef<Ref, Props>((props, ref) => (
  <StyledButton
    type="submit"
    name={props.name}
    id={props.id}
    value={props.children}
    onClick={props.onClick}
    ref={ref}
  />
));
Button.displayName = 'Button';

// const Button = (props: Props) => {
//   return (
//     <StyledButton
//       type="submit"
//       name={props.name}
//       id={props.id}
//       value={props.children}
//       onClick={props.onClick}
//     />
//   )
// }

export default Button;
