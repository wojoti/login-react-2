import StyledLabel from "./Label.style";

interface Props {
  children?: React.ReactNode;
  color?: string;
}

function Label({ children, color }: Props) {
  return <StyledLabel color={color}>{children}</StyledLabel>;
}

export default Label;
