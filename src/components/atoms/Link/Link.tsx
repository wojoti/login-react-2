import StyledLink from "./Link.style";

interface Props {
  children: React.ReactNode;
  decoration?: string;
  href: string;
  color?: string;
}

function Link({ decoration, href, color, children }: Props) {
  return (
    <StyledLink decoration={decoration} href={href} color={color}>
      {children}
    </StyledLink>
  );
}

export default Link;
