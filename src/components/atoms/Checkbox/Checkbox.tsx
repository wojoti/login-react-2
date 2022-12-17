import { forwardRef } from "react";
import StyledCheckbox from "./Checkbox.style";

interface Props {
  name: string;
  id: string;
}

export type CheckboxRef = HTMLInputElement;

const Checkbox = forwardRef<CheckboxRef, Props>(({ name, id }, ref) => (
  <StyledCheckbox type="checkbox" name={name} id={id} ref={ref} />
));
Checkbox.displayName = "Checkbox";

export default Checkbox;
