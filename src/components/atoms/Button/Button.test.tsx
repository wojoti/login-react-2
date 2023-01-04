import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Button, { ButtonProps } from "./Button";

const handleClick = jest.fn();
const props: ButtonProps = {
  name: "test button",
  onClick: handleClick,
  testId: "test-button-id",
};

const modifiedProps: ButtonProps = {
  ...props,
  disabled: true,
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<Button {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render matching button with text", () => {
  render(<Button {...props} />);
  const buttonElement = screen.getByTestId("test-button-id");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent("test button");
});

test("should handle onClick event", () => {
  render(<Button {...props} />);
  const buttonElement = screen.getByTestId("test-button-id");
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("shouldn't be able to handle onClick when disabled", () => {
  render(<Button {...modifiedProps} />);
  const buttonElement = screen.getByTestId("test-button-id");
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(0);
});
