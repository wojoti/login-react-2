import styled from "styled-components";

interface Props {
  color?: string;
}
const StyledLabel = styled.span<Props>`
  color: ${(props) => props.color || "inherit"};
  font-size: 14px;
`;
export default StyledLabel;
