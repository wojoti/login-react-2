import { forwardRef } from "react";
import StyledTextField from "./TextField.style";

export interface TextFieldProps {
  type: string;
  name: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  testId?: string;
  isValid?: boolean;
}
export type TextFieldRef = HTMLInputElement;

const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  ({ type, name, id, onChange, isValid = true, testId }, ref) => (
    <StyledTextField
      type={type}
      name={name}
      id={id}
      data-testid={testId}
      onChange={onChange}
      isValid={isValid}
      ref={ref}
    />
  )
);
TextField.displayName = "TextField";
export default TextField;
