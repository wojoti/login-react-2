import Label from "@components/atoms/Label/Label";
import TextField from "@components/atoms/TextField/TextField";
import { forwardRef } from "react";

type Props = {
  type: string;
  name: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isValid?: boolean;
};
export type TextInputRef = HTMLInputElement;

const TextInput = forwardRef<TextInputRef, Props>(
  ({ type, name, id, onChange, isValid }, ref) => (
    <>
      <Label>{name}</Label>
      <TextField
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        isValid={isValid}
        ref={ref}
      />
    </>
  )
);
TextInput.displayName = "TextInput";

export default TextInput;
