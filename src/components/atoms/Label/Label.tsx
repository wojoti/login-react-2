import React, { ReactNode } from "react";
import { StyledLabel } from "./Label.style";

type Props = {
  children?: ReactNode;
  color?: string;
};

const Label = (props: Props) => {
  return <StyledLabel color={props.color}>{props.children}</StyledLabel>;
};

export default Label;
