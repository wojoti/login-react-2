import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import IconButton, { IconButtonProps } from "./IconButton";

const handleClick = jest.fn();
const props: IconButtonProps = {
  testId: "test-iconbutton-id",
  children: "test iconbutton",
  onClick: handleClick,
};

const modifiedProps: IconButtonProps = {
  ...props,
  color: "blue",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<IconButton {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render iconbutton", () => {
  render(<IconButton {...props} />);
  const iconbuttonElement = screen.getByTestId("test-iconbutton-id");
  expect(iconbuttonElement).toBeInTheDocument();
});

test("should handle onClick event", () => {
  render(<IconButton {...props} />);
  const iconbuttonElement = screen.getByTestId("test-iconbutton-id");
  fireEvent.click(iconbuttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should render iconbutton with modified style through props", () => {
  render(<IconButton {...modifiedProps} />);
  const iconbuttonElement = screen.getByTestId("test-iconbutton-id");
  expect(iconbuttonElement).toBeInTheDocument();
  expect(iconbuttonElement).toHaveStyle("border-color: blue");
});
