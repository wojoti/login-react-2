import React from "react";
import { Wrapper } from "./TextInput.style";

type Props = {
  type: string;
  name?: string;
  id?: string;
  onFieldChange?: (e: any) => void;
};

const TextInput = (props: Props) => {
  return (
    <Wrapper
      type={props.type}
      name={props.name}
      id={props.id}
      onChange={props.onFieldChange}
    ></Wrapper>
  );
};

export default TextInput;
