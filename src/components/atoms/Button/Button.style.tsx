import styled from "styled-components";

interface Props {
  disabled?: boolean;
}

const StyledButton = styled.button<Props>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 100%;
  height: 32px;
  border-radius: 6px;
  border: 0px solid black;
  background-color: rgb(244 63 94);
  background-color: ${(props) =>
    (props.disabled ? "grey" : "rgb(244 63 94)") || "rgb(244 63 94)"};
  color: white;
  cursor: pointer;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`;

export default StyledButton;
