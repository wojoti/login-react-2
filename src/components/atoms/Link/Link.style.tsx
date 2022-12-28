import styled from "styled-components";

interface Props {
  decoration?: string;
  color?: string;
}
const StyledLink = styled.button<Props>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-decoration: ${(props) => props.decoration || "underline"};
  color: ${(props) => props.color || "inherit"};
  font-size: 14px;

  background: none !important;
  border: none;
  padding: 0 !important;
  cursor: pointer;
`;
export default StyledLink;
