import styled from "styled-components";
type Props = {
  w: number;
  h: number;
};
export const Wrapper = styled.img<Props>`
  width: ${(props) => props.w || 0}px;
  height: ${(props) => props.h || 0}px;
`;
