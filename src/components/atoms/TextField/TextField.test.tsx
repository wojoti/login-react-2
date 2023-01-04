import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import TextField, { TextFieldProps } from "./TextField";

const props: TextFieldProps = {
  type: "email",
  name: "email",
  id: "email",
  testId: "test-textfield-id",
};

const modifiedProps: TextFieldProps = {
  ...props,
  isValid: false,
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<TextField {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render textfield", () => {
  render(<TextField {...props} />);
  const textfieldElement = screen.getByTestId("test-textfield-id");
  expect(textfieldElement).toBeInTheDocument();
});

test("should handle text change", () => {
  render(<TextField {...props} />);
  const textfieldElement = screen.getByTestId("test-textfield-id");
  expect(textfieldElement).toBeInTheDocument();
  userEvent.type(textfieldElement, "test1234");
  expect(textfieldElement).toHaveProperty("value", "test1234");
});

test("should render textfield with red border when invalid (eg. regex)", () => {
  render(<TextField {...modifiedProps} />);
  const textfieldElement = screen.getByTestId("test-textfield-id");
  expect(textfieldElement).toBeInTheDocument();
  expect(textfieldElement).toHaveStyle("border: 2px solid rgb(244 63 94)");
});
