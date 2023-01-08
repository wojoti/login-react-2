import { Checkbox, Label } from "@components/atoms";
import { forwardRef } from "react";
import Wrapper from "./CheckboxArea.style";

export interface CheckboxAreaProps {
  name: string;
  id: string;
  label: string;
  testId?: string;
}

export type CheckboxAreaRef = HTMLInputElement;

const CheckboxArea = forwardRef<CheckboxAreaRef, CheckboxAreaProps>(
  ({ name, id, label, testId }, ref) => (
    <Wrapper data-testid={testId}>
      <Checkbox name={name} id={id} testId="checkboxarea-checkbox" ref={ref} />
      <Label testId="checkboxarea-label">{label}</Label>
    </Wrapper>
  )
);
CheckboxArea.displayName = "CheckboxArea";

export default CheckboxArea;
