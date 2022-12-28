import { forwardRef } from "react";
import StyledLink from "./Link.style";

interface LinkProps {
  children: React.ReactNode;
  decoration?: string;
  href: string;
  color?: string;
  onClick: () => void;
}

export type LinkRef = HTMLAnchorElement;

const Link = forwardRef<LinkRef, LinkProps>(
  ({ decoration, href, color, children, onClick }, ref) => (
    <StyledLink
      decoration={decoration}
      href={href}
      color={color}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </StyledLink>
  )
);
Link.displayName = "Link";

// function Link({ decoration, href, color, children, onClick }: Props) {
//   return (
//     <StyledLink
//       decoration={decoration}
//       href={href}
//       color={color}
//       onClick={onClick}
//     >
//       {children}
//     </StyledLink>
//   );
// }

export default Link;
