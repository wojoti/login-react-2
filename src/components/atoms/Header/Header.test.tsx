import { cleanup, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Header, { HeaderProps } from "./Header";

afterEach(() => {
  cleanup();
});

const props: HeaderProps = {
  testId: "test-header-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(
    <Header {...props}>test header</Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render header", () => {
  render(<Header {...props}>test header</Header>);
  const headerElement = screen.getByTestId("test-header-id");
  expect(headerElement).toBeInTheDocument();
});

test("should render header with text", () => {
  render(<Header {...props}>test header</Header>);
  const headerElement = screen.getByTestId("test-header-id");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("test header");
});
