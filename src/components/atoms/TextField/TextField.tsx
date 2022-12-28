import { forwardRef } from "react";
import StyledTextField from "./TextField.style";

export interface TextFieldProps {
  type: string;
  name: string;
  id: string;
  testId?: string;
}
export type TextFieldRef = HTMLInputElement;

const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  ({ type, name, id, testId }, ref) => (
    <StyledTextField
      type={type}
      name={name}
      id={id}
      data-testid={testId}
      ref={ref}
    />
  )
);
TextField.displayName = "TextField";

export default TextField;
