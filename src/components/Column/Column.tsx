import React, { ReactNode } from "react";
import { Wrapper } from "./Column.style";

type Props = {
  children: ReactNode;
};

const Column = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Column;
