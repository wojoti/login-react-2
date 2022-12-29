import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Column, { ColumnProps } from "./Column";

const props: ColumnProps = {
  testId: "test-column-id",
};

const modifiedProps: ColumnProps = {
  ...props,
  mt: 14,
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<Column {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render column", () => {
  render(<Column {...props} />);
  const columnElement = screen.getByTestId("test-column-id");
  expect(columnElement).toBeInTheDocument();
});

test.todo("todo: create test here - inserted here just for example");

test("should render column with default style", () => {
  render(<Column {...props} />);
  const columnElement = screen.getByTestId("test-column-id");
  expect(columnElement).toBeInTheDocument();
  expect(columnElement).toHaveStyle("margin-top: 0px");
});

test("should render column with modified style through props", () => {
  render(<Column {...modifiedProps} />);
  const columnElement = screen.getByTestId("test-column-id");
  expect(columnElement).toBeInTheDocument();
  expect(columnElement).toHaveStyle("margin-top: 14px");
});
