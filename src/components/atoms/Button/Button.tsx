import { forwardRef } from "react";
import StyledButton from "./Button.style";

export interface ButtonProps {
  name: string;
  onClick: () => void;
  testId?: string;
  disabled?: boolean;
}

export type ButtonRef = HTMLButtonElement;

const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ name, onClick, testId, disabled = false }, ref) => (
    <StyledButton
      type="submit"
      onClick={onClick}
      data-testid={testId}
      ref={ref}
      disabled={disabled}
    >
      {name}
    </StyledButton>
  )
);
Button.displayName = "Button";

export default Button;
