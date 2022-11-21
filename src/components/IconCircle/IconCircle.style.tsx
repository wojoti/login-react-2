import styled from "styled-components";
type Props = {
  accent?: string;
};
export const Wrapper = styled.div<Props>`
  border: 2px solid black;
  border-radius: 45px;
  padding: 2px 6px;
  border-color: ${(props) => props.accent || "black"};
  margin: 0px 10px;
`;
