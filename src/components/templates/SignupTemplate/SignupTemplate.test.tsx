import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import SignupTemplate, { SignupTemplateProps } from "./SignupTemplate";

const props: SignupTemplateProps = {
  onSignupSubmit: () => {},
  onIconClick: () => {},
  onLinkClick: () => {},
  testId: "test-signuptemplate-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<SignupTemplate {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render signuptemplate", () => {
  render(<SignupTemplate {...props} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
});

test("should render signuptemplate default disabled button ", () => {
  render(<SignupTemplate {...props} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
  const signuptemplateButtonElement = screen.getByTestId("signup-button-id");
  expect(signuptemplateButtonElement).toBeInTheDocument();
  expect(signuptemplateButtonElement).toBeDisabled();
});

test("should render signuptemplate with enabled button - both inputs filled, email regex correct", () => {
  render(<SignupTemplate {...props} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
  const signuptemplateSignupElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signuptemplateSignupElement).toBeInTheDocument();
  const textfieldSignupElement = within(
    signuptemplateSignupElement
  ).getByTestId("textinput-textfield");
  expect(textfieldSignupElement).toBeInTheDocument();
  userEvent.type(textfieldSignupElement, "test@test.eu");

  const signuptemplatePasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signuptemplatePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signuptemplatePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const signuptemplateButtonElement = screen.getByTestId("signup-button-id");
  expect(signuptemplateButtonElement).toBeInTheDocument();
  expect(signuptemplateButtonElement).not.toBeDisabled();
});

test("should handle onClick on button", () => {
  const handleClick = jest.fn();
  render(<SignupTemplate {...props} onSignupSubmit={handleClick} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
  const signuptemplateSignupElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signuptemplateSignupElement).toBeInTheDocument();
  const textfieldSignupElement = within(
    signuptemplateSignupElement
  ).getByTestId("textinput-textfield");
  expect(textfieldSignupElement).toBeInTheDocument();
  userEvent.type(textfieldSignupElement, "test@test.eu");

  const signuptemplatePasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signuptemplatePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signuptemplatePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const signuptemplateButtonElement = screen.getByTestId("signup-button-id");
  expect(signuptemplateButtonElement).toBeInTheDocument();
  expect(signuptemplateButtonElement).not.toBeDisabled();

  fireEvent.click(signuptemplateButtonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should render signuptemplate with disabled button - both inputs filled, email regex incorrect", () => {
  render(<SignupTemplate {...props} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
  const signuptemplateSignupElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signuptemplateSignupElement).toBeInTheDocument();
  const textfieldSignupElement = within(
    signuptemplateSignupElement
  ).getByTestId("textinput-textfield");
  expect(textfieldSignupElement).toBeInTheDocument();
  userEvent.type(textfieldSignupElement, "t");

  const signuptemplatePasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signuptemplatePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signuptemplatePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const signuptemplateButtonElement = screen.getByTestId("signup-button-id");
  expect(signuptemplateButtonElement).toBeInTheDocument();
  expect(signuptemplateButtonElement).toBeDisabled();
});

test("should render signuptemplate with disabled button - signup filled, email regex correct", () => {
  render(<SignupTemplate {...props} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
  const signuptemplateSignupElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signuptemplateSignupElement).toBeInTheDocument();
  const textfieldSignupElement = within(
    signuptemplateSignupElement
  ).getByTestId("textinput-textfield");
  expect(textfieldSignupElement).toBeInTheDocument();
  userEvent.type(textfieldSignupElement, "test@test.eu");

  const signuptemplateButtonElement = screen.getByTestId("signup-button-id");
  expect(signuptemplateButtonElement).toBeInTheDocument();
  expect(signuptemplateButtonElement).toBeDisabled();
});

test("should render signuptemplate with disabled button - password filled", () => {
  render(<SignupTemplate {...props} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
  const signuptemplatePasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signuptemplatePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signuptemplatePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const signuptemplateButtonElement = screen.getByTestId("signup-button-id");
  expect(signuptemplateButtonElement).toBeInTheDocument();
  expect(signuptemplateButtonElement).toBeDisabled();
});

test("should handle onClick on link", () => {
  const handleClick = jest.fn();
  render(<SignupTemplate {...props} onLinkClick={handleClick} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();

  const signuptemplateLinkElement = screen.getByTestId("signuptemplate-link");
  expect(signuptemplateLinkElement).toBeInTheDocument();

  fireEvent.click(signuptemplateLinkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should render email textfield with red border when invalid (eg. regex)", () => {
  render(<SignupTemplate {...props} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
  const signuptemplateSignupElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signuptemplateSignupElement).toBeInTheDocument();
  const textfieldSignupElement = within(
    signuptemplateSignupElement
  ).getByTestId("textinput-textfield");
  expect(textfieldSignupElement).toBeInTheDocument();
  userEvent.type(textfieldSignupElement, "t");
  expect(textfieldSignupElement).toHaveStyleRule(
    "border",
    "2px solid rgb(244 63 94)"
  );
});

test("should not render password textfield with red border when invalid'", () => {
  render(<SignupTemplate {...props} />);
  const signuptemplateElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuptemplateElement).toBeInTheDocument();
  const signuptemplateSignupElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signuptemplateSignupElement).toBeInTheDocument();
  const textfieldSignupElement = within(
    signuptemplateSignupElement
  ).getByTestId("textinput-textfield");
  expect(textfieldSignupElement).toBeInTheDocument();
  userEvent.type(textfieldSignupElement, "t");
  expect(textfieldSignupElement).not.toHaveStyleRule(
    "border",
    "2px solid rgb(244 63 94)"
  );
});

test("should render header with text", () => {
  render(<SignupTemplate {...props} />);
  const headerElement = screen.getByTestId("signuptemplate-header");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("SIGN UP");
});

test("should render breakline with text", () => {
  render(<SignupTemplate {...props} />);
  const breaklineElement = screen.getByTestId("signuptemplate-breakline");
  expect(breaklineElement).toBeInTheDocument();
  expect(breaklineElement).toHaveTextContent("OR");
});

test("should render signupform", () => {
  render(<SignupTemplate {...props} />);
  const signupformElement = screen.getByTestId("signuptemplate-socialicons");
  expect(signupformElement).toBeInTheDocument();
});

test("should handle clicks", () => {
  const handleClick = jest.fn();
  render(<SignupTemplate {...props} onIconClick={handleClick} />);
  const signupformElement = screen.getByTestId("signuptemplate-socialicons");
  expect(signupformElement).toBeInTheDocument();

  const googleElement = screen.getByTestId("iconbutton-g");
  expect(googleElement).toBeInTheDocument();
  const facebookElement = screen.getByTestId("iconbutton-fb");
  expect(facebookElement).toBeInTheDocument();
  const linkedinElement = screen.getByTestId("iconbutton-l");
  expect(linkedinElement).toBeInTheDocument();

  fireEvent.click(googleElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).lastCalledWith("google");
  fireEvent.click(facebookElement);
  expect(handleClick).toHaveBeenCalledTimes(2);
  expect(handleClick).lastCalledWith("facebook");
  fireEvent.click(linkedinElement);
  expect(handleClick).toHaveBeenCalledTimes(3);
  expect(handleClick).lastCalledWith("linkedin");
});

test("should render matching link with text", () => {
  render(<SignupTemplate {...props} />);
  const linkElement = screen.getByTestId("signuptemplate-link");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("LOGIN");
});

test("should handle onClick event", () => {
  const handleClick = jest.fn();
  render(<SignupTemplate {...props} onLinkClick={handleClick} />);
  const linkElement = screen.getByTestId("signuptemplate-link");
  fireEvent.click(linkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
