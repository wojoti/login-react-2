import React from "react";
import { Wrapper } from "./Checkbox.style";

type Props = {
  name?: string;
  id?: string;
  value?: string;
  onFieldChange?: (e: any) => void;
};

const Checkbox = (props: Props) => {
  return (
    <Wrapper
      type="checkbox"
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onFieldChange}
    ></Wrapper>
  );
};

export default Checkbox;
