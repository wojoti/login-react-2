import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import TextField, { TextFieldProps } from "./TextField";

afterEach(() => {
  cleanup();
});

const props: TextFieldProps = {
  type: "email",
  name: "email",
  id: "email",
  testId: "test-textfield-id",
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
