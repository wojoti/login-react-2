import styled from "styled-components";
type Props = {
  decoration?: string;
  color?: string;
};
export const StyledLink = styled.a<Props>`
  text-decoration: ${(props) => props.decoration || "underline"};
  color: ${(props) => props.color || "inherit"};
  font-size: 14px;
  &:link,
  &:visited {
    color: ${(props) => props.color || "inherit"};
  }
`;
