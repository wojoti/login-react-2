import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Link, { LinkProps } from "./Link";

const props: LinkProps = {
  children: "test link",
  onClick: () => {},
  testId: "test-link-id",
};

const modifiedProps: LinkProps = {
  ...props,
  decoration: "none",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<Link {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render matching link with text", () => {
  render(<Link {...props} />);
  const linkElement = screen.getByTestId("test-link-id");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("test link");
});

test("should handle onClick event", () => {
  const handleClick = jest.fn();
  render(<Link {...props} onClick={handleClick} />);
  const linkElement = screen.getByTestId("test-link-id");
  fireEvent.click(linkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should render link with modified style through props", () => {
  render(<Link {...modifiedProps} />);
  const linkElement = screen.getByTestId("test-link-id");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveStyle("text-decoration: none");
});
