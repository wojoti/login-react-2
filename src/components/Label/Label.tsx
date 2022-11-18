import React, { ReactNode } from "react";
import { Wrapper } from "./Label.style";

type Props = {
  children: ReactNode;
};

const Label = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Label;
