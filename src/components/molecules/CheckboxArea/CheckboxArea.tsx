import { forwardRef } from "react";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import Label from "../../atoms/Label/Label";

type Props = {
  name: string;
  id: string;
  label: string;
};

export type CheckboxAreaRef = HTMLInputElement;

const CheckboxArea = forwardRef<CheckboxAreaRef, Props>(
  ({ name, id, label }, ref) => (
    <>
      <Checkbox name={name} id={id} ref={ref} />
      <Label>{label}</Label>
    </>
  )
);
CheckboxArea.displayName = "CheckboxArea";

export default CheckboxArea;
