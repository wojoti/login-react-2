import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Container, { ContainerProps } from "./Container";

const props: ContainerProps = {
  testId: "test-container-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<Container {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render container", () => {
  render(<Container {...props} />);
  const containerElement = screen.getByTestId("test-container-id");
  expect(containerElement).toBeInTheDocument();
});
