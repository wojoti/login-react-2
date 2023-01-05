import { render, screen, within } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import TextInput, { TextInputProps } from "./TextInput";

const props: TextInputProps = {
  type: "email",
  name: "test textinput",
  id: "id-textinput",
  testId: "test-textinput-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<TextInput {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render textinput", () => {
  render(<TextInput {...props} />);
  const textinputElement = screen.getByTestId("test-textinput-id");
  expect(textinputElement).toBeInTheDocument();
});

test("should render textinput with certain label text", () => {
  render(<TextInput {...props} />);
  const textinputElement = screen.getByTestId("test-textinput-id");
  expect(textinputElement).toBeInTheDocument();
  const textinputLabelElement =
    within(textinputElement).getByTestId("textinput-label");
  expect(textinputLabelElement).toBeInTheDocument();
  expect(textinputLabelElement).toHaveTextContent("test textinput");
});

test("should render textinput with certain textfield id", () => {
  render(<TextInput {...props} />);
  const textinputElement = screen.getByTestId("test-textinput-id");
  expect(textinputElement).toBeInTheDocument();
  const textinputTextFieldElement = within(textinputElement).getByTestId(
    "textinput-textfield"
  );
  expect(textinputTextFieldElement).toBeInTheDocument();
  expect(textinputTextFieldElement).toHaveAttribute("id", "id-textinput");
});
