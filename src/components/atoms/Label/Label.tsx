import StyledLabel from "./Label.style";

export interface LabelProps {
  children?: React.ReactNode;
  color?: string;
  testId?: string;
}

function Label({ children, color, testId }: LabelProps) {
  return (
    <StyledLabel color={color} data-testid={testId}>
      {children}
    </StyledLabel>
  );
}

export default Label;
