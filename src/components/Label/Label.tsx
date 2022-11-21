import React, { ReactNode } from "react";
import { Wrapper } from "./Label.style";

type Props = {
  children?: ReactNode;
  color?: string;
};

const Label = (props: Props) => {
  return <Wrapper color={props.color}>{props.children}</Wrapper>;
};

export default Label;
