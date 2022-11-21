import React, { ReactNode } from "react";
import { Wrapper } from "./IconCircle.style";

type Props = { children: ReactNode; accent?: string };

const IconCircle = (props: Props) => {
  return <Wrapper accent={props.accent}>{props.children}</Wrapper>;
};

export default IconCircle;
