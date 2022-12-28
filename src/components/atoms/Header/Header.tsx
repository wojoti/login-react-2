import StyledHeader from "./Header.style";

export interface HeaderProps {
  children?: React.ReactNode;
  testId?: string;
}

function Header({ children, testId }: HeaderProps) {
  return <StyledHeader data-testid={testId}>{children}</StyledHeader>;
}

export default Header;
