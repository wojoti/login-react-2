import React, { ReactNode } from "react";
import { Wrapper } from "./Container.style";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
