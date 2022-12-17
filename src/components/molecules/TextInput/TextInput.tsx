import { forwardRef } from "react";
import Label from "../../atoms/Label/Label";
import TextField from "../../atoms/TextField/TextField";

type Props = {
  type: string;
  name: string;
  id: string;
};
export type TextInputRef = HTMLInputElement;

const TextInput = forwardRef<TextInputRef, Props>((props, ref) => (
  <>
    <Label>{props.name}</Label>
    <TextField type={props.type} name={props.name} id={props.id} ref={ref} />
  </>
));
TextInput.displayName = "TextInput";

export default TextInput;
