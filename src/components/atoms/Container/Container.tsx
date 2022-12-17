import Wrapper from "./Container.style";

interface Props {
  children?: React.ReactNode;
}

function Container({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
