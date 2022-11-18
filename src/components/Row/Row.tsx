import React, { ReactNode } from "react";
import { Wrapper } from "./Row.style";

type Props = {
  children: ReactNode;
};

const Row = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Row;
