import StyledHeader from "./Header.style";

interface Props {
  children?: React.ReactNode;
}

function Header({ children }: Props) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
