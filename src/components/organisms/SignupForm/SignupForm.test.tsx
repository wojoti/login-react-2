import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import SignupForm, { SignupFormProps } from "./SignupForm";

const props: SignupFormProps = {
  onSignupSubmit: () => {},
  testId: "test-signupform-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<SignupForm {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render signupform", () => {
  render(<SignupForm {...props} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
});

test("should render signupform default disabled button ", () => {
  render(<SignupForm {...props} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
  const signupformButtonElement = screen.getByTestId("signup-button-id");
  expect(signupformButtonElement).toBeInTheDocument();
  expect(signupformButtonElement).toBeDisabled();
});

test("should render signupform with enabled button - both inputs filled, email regex correct", () => {
  render(<SignupForm {...props} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
  const signupformLoginElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signupformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(signupformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.eu");

  const signupformPasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signupformPasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signupformPasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const signupformButtonElement = screen.getByTestId("signup-button-id");
  expect(signupformButtonElement).toBeInTheDocument();
  expect(signupformButtonElement).not.toBeDisabled();
});

test("should handle onClick on button", () => {
  const handleClick = jest.fn();
  render(<SignupForm {...props} onSignupSubmit={handleClick} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
  const signupformLoginElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signupformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(signupformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.eu");

  const signupformPasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signupformPasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signupformPasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const signupformButtonElement = screen.getByTestId("signup-button-id");
  expect(signupformButtonElement).toBeInTheDocument();
  expect(signupformButtonElement).not.toBeDisabled();

  fireEvent.click(signupformButtonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should render signupform with disabled button - both inputs filled, email regex incorrect", () => {
  render(<SignupForm {...props} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
  const signupformLoginElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signupformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(signupformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "t");

  const signupformPasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signupformPasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signupformPasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const signupformButtonElement = screen.getByTestId("signup-button-id");
  expect(signupformButtonElement).toBeInTheDocument();
  expect(signupformButtonElement).toBeDisabled();
});

test("should render signupform with disabled button - login filled, email regex correct", () => {
  render(<SignupForm {...props} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
  const signupformLoginElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signupformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(signupformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.eu");

  const signupformButtonElement = screen.getByTestId("signup-button-id");
  expect(signupformButtonElement).toBeInTheDocument();
  expect(signupformButtonElement).toBeDisabled();
});

test("should render signupform with disabled button - password filled", () => {
  render(<SignupForm {...props} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
  const signupformPasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signupformPasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signupformPasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const signupformButtonElement = screen.getByTestId("signup-button-id");
  expect(signupformButtonElement).toBeInTheDocument();
  expect(signupformButtonElement).toBeDisabled();
});
test("should render email textfield with red border when invalid (eg. regex)", () => {
  render(<SignupForm {...props} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
  const signupformLoginElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signupformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(signupformLoginElement).getByTestId(
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
  render(<SignupForm {...props} />);
  const signupformElement = screen.getByTestId("test-signupform-id");
  expect(signupformElement).toBeInTheDocument();
  const signupformLoginElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signupformLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(signupformLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "t");
  expect(textfieldLoginElement).not.toHaveStyleRule(
    "border",
    "2px solid rgb(244 63 94)"
  );
});
