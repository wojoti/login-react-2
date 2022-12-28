import StyledLink from "./Link.style";

export interface LinkProps {
  children: React.ReactNode;
  decoration?: string;
  color?: string;
  testId?: string;
  onClick: () => void;
}

function Link({ children, decoration, color, onClick, testId }: LinkProps) {
  return (
    <StyledLink
      type="button"
      decoration={decoration}
      color={color}
      data-testid={testId}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
}
export default Link;
