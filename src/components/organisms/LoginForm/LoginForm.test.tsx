import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import LoginForm, { LoginFormProps } from "./LoginForm";

const props: LoginFormProps = {
  onLoginSubmit: () => {},
  onLinkClick: () => {},
  testId: "test-loginform-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<LoginForm {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render loginform", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
});

test("should render loginform default disabled button ", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
  const loginformButtonElement = screen.getByTestId("login-button-id");
  expect(loginformButtonElement).toBeInTheDocument();
  expect(loginformButtonElement).toBeDisabled();
});

test("should render loginform with enabled button - both inputs filled, email regex correct", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
  const loginformLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.eu");

  const loginformPasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginformPasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(loginformPasswordElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const loginformButtonElement = screen.getByTestId("login-button-id");
  expect(loginformButtonElement).toBeInTheDocument();
  expect(loginformButtonElement).not.toBeDisabled();
});

test("should handle onClick on button", () => {
  const handleClick = jest.fn();
  render(<LoginForm {...props} onLoginSubmit={handleClick} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
  const loginformLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.eu");

  const loginformPasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginformPasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(loginformPasswordElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const loginformButtonElement = screen.getByTestId("login-button-id");
  expect(loginformButtonElement).toBeInTheDocument();
  expect(loginformButtonElement).not.toBeDisabled();

  fireEvent.click(loginformButtonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should render loginform with disabled button - both inputs filled, email regex incorrect", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
  const loginformLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "t");

  const loginformPasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginformPasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(loginformPasswordElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const loginformButtonElement = screen.getByTestId("login-button-id");
  expect(loginformButtonElement).toBeInTheDocument();
  expect(loginformButtonElement).toBeDisabled();
});

test("should render loginform with disabled button - login filled, email regex correct", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
  const loginformLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.eu");

  const loginformButtonElement = screen.getByTestId("login-button-id");
  expect(loginformButtonElement).toBeInTheDocument();
  expect(loginformButtonElement).toBeDisabled();
});

test("should render loginform with disabled button - password filled", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
  const loginformPasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginformPasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(loginformPasswordElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const loginformButtonElement = screen.getByTestId("login-button-id");
  expect(loginformButtonElement).toBeInTheDocument();
  expect(loginformButtonElement).toBeDisabled();
});

test("should handle onClick on link", () => {
  const handleClick = jest.fn();
  render(<LoginForm {...props} onLinkClick={handleClick} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();

  const loginformLinkElement = screen.getByTestId("loginform-link");
  expect(loginformLinkElement).toBeInTheDocument();

  fireEvent.click(loginformLinkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should handle click on checkbox", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();

  const loginformCheckboxAreaElement = screen.getByTestId(
    "loginform-CheckboxArea"
  );
  expect(loginformCheckboxAreaElement).toBeInTheDocument();

  const checkboxElement = within(loginformCheckboxAreaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxElement).not.toBeChecked();
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
});

test("should render email textfield with red border when invalid (eg. regex)", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
  const loginformLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "t");
  expect(textfieldLoginElement).toHaveStyleRule(
    "border",
    "2px solid rgb(244 63 94)"
  );
});

test("should not render password textfield with red border when invalid'", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();
  const loginformLoginElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "t");
  expect(textfieldLoginElement).not.toHaveStyleRule(
    "border",
    "2px solid rgb(244 63 94)"
  );
});
test("should render checkboxarea with checkbox unchecked by default", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();

  const checkboxareaElement = screen.getByTestId("loginform-CheckboxArea");
  expect(checkboxareaElement).toBeInTheDocument();
  const checkboxareaCheckboxElement = within(checkboxareaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxareaCheckboxElement).toBeInTheDocument();
  expect(checkboxareaCheckboxElement).not.toBeChecked();
});

test("should switch checkbox status after click", () => {
  render(<LoginForm {...props} />);
  const loginformElement = screen.getByTestId("test-loginform-id");
  expect(loginformElement).toBeInTheDocument();

  const checkboxareaElement = screen.getByTestId("loginform-CheckboxArea");
  expect(checkboxareaElement).toBeInTheDocument();
  const checkboxareaCheckboxElement = within(checkboxareaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxareaCheckboxElement).toBeInTheDocument();
  fireEvent.click(checkboxareaCheckboxElement);
  expect(checkboxareaCheckboxElement).toBeChecked();
});
