import { cleanup, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Icon, { IconProps, IconType } from "./Icon";

afterEach(() => {
  cleanup();
});

const props: IconProps = {
  src: IconType.facebook,
  width: 16,
  height: 16,
  alt: "alt-text",
  testId: "test-icon-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<Icon {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render icon", () => {
  render(<Icon {...props} />);
  const iconElement = screen.getByTestId("test-icon-id");
  expect(iconElement).toBeInTheDocument();
});

test("should render icon with alternative name", () => {
  render(<Icon {...props} />);
  const iconElement = screen.getByAltText("alt-text");
  expect(iconElement).toBeInTheDocument();
});
