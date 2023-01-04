import styled from "styled-components";

interface Props {
  isValid?: boolean;
}

const StyledTextField = styled.input<Props>`
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
  border: 2px solid
    ${(props) => (props.isValid ? "#e5e7eb" : "rgb(244 63 94)") || "#e5e7eb"};
  border-radius: 5px;
  padding-left: 10px;
`;
export default StyledTextField;
