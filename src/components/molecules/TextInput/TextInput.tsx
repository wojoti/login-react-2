import Label from "@components/atoms/Label/Label";
import TextField from "@components/atoms/TextField/TextField";
import { forwardRef } from "react";

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
