import styled from "styled-components";
type Props = {
  color?: string;
};
export const StyledLabel = styled.span<Props>`
  color: ${(props) => props.color || "inherit"};
  font-size: 14px;
`;
