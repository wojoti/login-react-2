import Label from "@components/atoms/Label/Label";
import TextField from "@components/atoms/TextField/TextField";
import { forwardRef } from "react";
import Wrapper from "./TextInput.style";

export interface TextInputProps {
  type: string;
  name: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isValid?: boolean;
  testId?: string;
}
export type TextInputRef = HTMLInputElement;

const TextInput = forwardRef<TextInputRef, TextInputProps>(
  ({ type, name, id, onChange, isValid, testId }, ref) => (
    <Wrapper data-testid={testId}>
      <Label testId="textinput-label">{name}</Label>
      <TextField
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        isValid={isValid}
        testId="textinput-textfield"
        ref={ref}
      />
    </Wrapper>
  )
);
TextInput.displayName = "TextInput";

export default TextInput;
