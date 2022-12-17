import { forwardRef } from "react";
import StyledButton from "./Button.style";

interface Props {
  name: string;
  onClick: () => void;
}

export type ButtonRef = HTMLButtonElement;

const Button = forwardRef<ButtonRef, Props>(({ name, onClick }, ref) => (
  <StyledButton type="submit" onClick={onClick} ref={ref}>
    {name}
  </StyledButton>
));
Button.displayName = "Button";

export default Button;
