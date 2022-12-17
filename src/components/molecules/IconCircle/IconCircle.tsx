import { ReactNode } from "react";
import Wrapper from "./IconCircle.style";

interface Props {
  children: ReactNode;
  color?: string;
}

function IconCircle({ color, children }: Props) {
  return <Wrapper accent={color}>{children}</Wrapper>;
}

export default IconCircle;
