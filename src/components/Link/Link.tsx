import React, { ReactNode } from "react";
import { Wrapper } from "./Link.style";

type Props = {
  children?: ReactNode;
  decoration?: string;
  goto: string;
  color?: string;
};

const Link = (props: Props) => {
  return (
    <Wrapper
      decoration={props.decoration}
      href={props.goto}
      color={props.color}
    >
      {props.children}
    </Wrapper>
  );
};

export default Link;
