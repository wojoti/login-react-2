import { render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import CheckboxArea, { CheckboxAreaProps } from "./CheckboxArea";

const props: CheckboxAreaProps = {
  name: "name checkboxarea",
  id: "test-checkboxarea",
  label: "label checkboxarea",
  testId: "test-checkboxarea-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<CheckboxArea {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render checkboxarea", () => {
  render(<CheckboxArea {...props} />);
  const checkboxareaElement = screen.getByTestId("test-checkboxarea-id");
  expect(checkboxareaElement).toBeInTheDocument();
});

test("should render checkboxarea with certain label text", () => {
  render(<CheckboxArea {...props} />);
  const checkboxareaElement = screen.getByTestId("test-checkboxarea-id");
  expect(checkboxareaElement).toBeInTheDocument();
  const checkboxareaLabelElement =
    within(checkboxareaElement).getByTestId("checkboxarea-label");
  expect(checkboxareaLabelElement).toBeInTheDocument();
  expect(checkboxareaLabelElement).toHaveTextContent("label checkboxarea");
});

test("should render checkboxarea with certain checkbox id", () => {
  render(<CheckboxArea {...props} />);
  const checkboxareaElement = screen.getByTestId("test-checkboxarea-id");
  expect(checkboxareaElement).toBeInTheDocument();
  const checkboxareaCheckboxElement = within(checkboxareaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxareaCheckboxElement).toBeInTheDocument();
  expect(checkboxareaCheckboxElement).toHaveAttribute(
    "name",
    "name checkboxarea"
  );
});
