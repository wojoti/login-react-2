import React, { ReactNode } from "react";
import { Wrapper } from "./Box.style";
type Props = {
  children?: ReactNode;
};

const Box = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Box;
