import styled from "styled-components";

interface Props {
  width: number;
  height: number;
}
const StyledIcon = styled.img<Props>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
export default StyledIcon;
