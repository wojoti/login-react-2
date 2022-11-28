import React from "react";
import { StyledCheckbox } from "./Checkbox.style";

type Props = {
  name: string;
  id: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = (props: Props) => {
  return (
    <StyledCheckbox
      type="checkbox"
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    ></StyledCheckbox>
  );
};

export default Checkbox;
