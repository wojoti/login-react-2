import { forwardRef, ReactNode } from "react";
import Wrapper from "./IconButton.style";

interface Props {
  children: ReactNode;
  color?: string;
  onClick: () => void;
}
export type IconButtonRef = HTMLButtonElement;

const IconButton = forwardRef<IconButtonRef, Props>(
  ({ children, color, onClick }, ref) => (
    <Wrapper accent={color} onClick={onClick} ref={ref}>
      {children}
    </Wrapper>
  )
);
IconButton.displayName = "IconButton";

export default IconButton;
