import styled from "styled-components";

interface Props {
  accent?: string;
}
const Wrapper = styled.button<Props>`
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 2px solid black;
  border-radius: 45px;
  padding: 3px 5px;
  border-color: ${(props) => props.accent || "black"};
  background-color: white;
  margin: 0px 10px;
  cursor: pointer;
`;
export default Wrapper;
