import React, { ReactNode } from "react";
import { Wrapper } from "./Header.style";

type Props = {
  children?: ReactNode;
};

const Header = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Header;
