import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Button, { ButtonProps } from "./Button";

afterEach(() => {
  cleanup();
});

const props: ButtonProps = {
  name: "test button",
  onClick: () => {},
  testId: "test-button-id",
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
  const handleClick = jest.fn();
  render(<Button {...props} onClick={handleClick} />);
  const buttonElement = screen.getByTestId("test-button-id");
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
