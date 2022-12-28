import styled from "styled-components";

interface Props {
  color?: string;
}
const StyledLabel = styled.span<Props>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: ${(props) => props.color || "inherit"};
  font-size: 14px;
`;
export default StyledLabel;
