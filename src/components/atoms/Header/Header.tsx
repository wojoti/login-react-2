import React, { ReactNode } from "react";
import { StyledHeader } from "./Header.style";

type Props = {
  children?: ReactNode;
};

const Header = (props: Props) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
