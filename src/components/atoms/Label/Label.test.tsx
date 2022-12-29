import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Label, { LabelProps } from "./Label";

const props: LabelProps = {
  testId: "test-label-id",
};

const modifiedProps: LabelProps = {
  ...props,
  color: "red",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(
    <Label {...props}>test label</Label>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render label", () => {
  render(<Label {...props}>test label</Label>);
  const labelElement = screen.getByTestId("test-label-id");
  expect(labelElement).toBeInTheDocument();
});

test("should render label with text", () => {
  render(<Label {...props}>test label</Label>);
  const labelElement = screen.getByTestId("test-label-id");
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveTextContent("test label");
});

test("should render label with modified style through props", () => {
  render(<Label {...modifiedProps} />);
  const labelElement = screen.getByTestId("test-label-id");
  expect(labelElement).toBeInTheDocument();
  expect(labelElement).toHaveStyle("color: red");
});
