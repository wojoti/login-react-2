import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Breakline, { BreaklineProps } from "./Breakline";

const props: BreaklineProps = {
  children: "test breakline",
  testId: "test-breakline-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<Breakline {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render breakline", () => {
  render(<Breakline {...props} />);
  const breaklineElement = screen.getByTestId("test-breakline-id");
  expect(breaklineElement).toBeInTheDocument();
});

test("should render breakline with text", () => {
  render(<Breakline {...props} />);
  const breaklineElement = screen.getByTestId("test-breakline-id");
  expect(breaklineElement).toBeInTheDocument();
  expect(breaklineElement).toHaveTextContent("test breakline");
});
