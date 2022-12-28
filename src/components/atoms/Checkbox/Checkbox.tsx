import { forwardRef } from "react";
import StyledCheckbox from "./Checkbox.style";

export interface CheckboxProps {
  name: string;
  id: string;
  testId?: string;
}

export type CheckboxRef = HTMLInputElement;

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ name, id, testId }, ref) => (
    <StyledCheckbox
      type="checkbox"
      name={name}
      id={id}
      data-testid={testId}
      ref={ref}
    />
  )
);
Checkbox.displayName = "Checkbox";

export default Checkbox;
