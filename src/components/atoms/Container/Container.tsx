import Wrapper from "./Container.style";

export interface ContainerProps {
  children?: React.ReactNode;
  testId?: string;
}

function Container({ children, testId }: ContainerProps) {
  return <Wrapper data-testid={testId}>{children}</Wrapper>;
}

export default Container;
