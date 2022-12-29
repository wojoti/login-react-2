import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Row, { RowProps } from "./Row";

const props: RowProps = {
  testId: "test-row-id",
};

const modifiedProps: RowProps = {
  ...props,
  mr: 14,
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<Row {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render row", () => {
  render(<Row {...props} />);
  const rowElement = screen.getByTestId("test-row-id");
  expect(rowElement).toBeInTheDocument();
});

test("should render row with modified style through props", () => {
  render(<Row {...modifiedProps} />);
  const rowElement = screen.getByTestId("test-row-id");
  expect(rowElement).toBeInTheDocument();
  expect(rowElement).toHaveStyle("margin-right: 14px");
});
