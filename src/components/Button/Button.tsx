import React from "react";
import { Wrapper } from "./Button.style";

type Props = {
  name?: string;
  id?: string;
  children?: string;
  onSubmit?: (e: any) => void;
};

const Button = (props: Props) => {
  return (
    <Wrapper
      type="submit"
      name={props.name}
      id={props.id}
      value={props.children}
      onClick={props.onSubmit}
    ></Wrapper>
  );
};

export default Button;
