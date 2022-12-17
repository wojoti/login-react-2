import styled from "styled-components";

interface Props {
  width: number;
  height: number;
}
const StyledIcon = styled.img<Props>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
export default StyledIcon;
