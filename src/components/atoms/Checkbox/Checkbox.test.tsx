import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Checkbox, { CheckboxProps } from "./Checkbox";

afterEach(() => {
  cleanup();
});

const props: CheckboxProps = {
  name: "test checkbox",
  id: "test-checkbox-id",
  testId: "test-checkbox-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<Checkbox {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render checkbox", () => {
  render(<Checkbox {...props} />);
  const checkboxElement = screen.getByTestId("test-checkbox-id");
  expect(checkboxElement).toBeInTheDocument();
});

test("should render checkbox unchecked by default", () => {
  render(<Checkbox {...props} />);
  const checkboxElement = screen.getByTestId("test-checkbox-id");
  expect(checkboxElement).toBeInTheDocument();
  expect(checkboxElement).not.toBeChecked();
});

test("should switch checkbox status after click", () => {
  render(<Checkbox {...props} />);
  const checkboxElement = screen.getByTestId("test-checkbox-id");
  expect(checkboxElement).toBeInTheDocument();
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
});
