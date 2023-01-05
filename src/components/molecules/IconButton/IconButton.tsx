import { forwardRef, ReactNode } from "react";
import Wrapper from "./IconButton.style";

export interface IconButtonProps {
  children: ReactNode;
  color?: string;
  onClick: () => void;
  testId?: string;
}
export type IconButtonRef = HTMLButtonElement;

const IconButton = forwardRef<IconButtonRef, IconButtonProps>(
  ({ children, color, onClick, testId }, ref) => (
    <Wrapper accent={color} onClick={onClick} data-testid={testId} ref={ref}>
      {children}
    </Wrapper>
  )
);
IconButton.displayName = "IconButton";

export default IconButton;
