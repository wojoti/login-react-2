import StyledLink from "./Link.style";

interface LinkProps {
  children: React.ReactNode;
  decoration?: string;
  color?: string;
  onClick: () => void;
}

function Link({ children, decoration, color, onClick }: LinkProps) {
  return (
    <StyledLink
      type="button"
      decoration={decoration}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledLink>
  );
}
export default Link;
