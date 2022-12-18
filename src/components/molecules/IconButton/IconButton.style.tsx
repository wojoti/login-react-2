import styled from "styled-components";

interface Props {
  accent?: string;
}
const Wrapper = styled.button<Props>`
  border: 2px solid black;
  border-radius: 45px;
  padding: 3px 5px;
  border-color: ${(props) => props.accent || "black"};
  background-color: white;
  margin: 0px 10px;
`;
export default Wrapper;
