import { forwardRef } from "react";
import StyledTextField from "./TextField.style";

interface Props {
  type: string;
  name: string;
  id: string;
}
export type TextFieldRef = HTMLInputElement;

const TextField = forwardRef<TextFieldRef, Props>((props, ref) => (
  <StyledTextField
    type={props.type}
    name={props.name}
    id={props.id}
    ref={ref}
  />
));
TextField.displayName = "TextField";

export default TextField;
