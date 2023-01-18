import { store } from "@/store/store";
import renderWithProviders from "@/test-utils";
import { fireEvent, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import LoginTemplate, { LoginTemplateProps } from "./LoginTemplate";

const props: LoginTemplateProps = {
  onLoginSubmit: () => {},
  onIconClick: () => {},
  onLinkClick: () => {},
  testId: "test-logintemplate-id",
  userData: {
    success: false,
    name: "",
    role: "",
    status: "",
  },
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <LoginTemplate {...props} />
    </Provider>
  ).toJSON();
  // const tree = renderWithProviders(<LoginTemplate {...props} />);
  expect(tree).toMatchSnapshot();
});

test("should render logintemplate", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
});

test("should render logintemplate default disabled button ", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
  const logintemplateButtonElement = screen.getByTestId("login-button-id");
  expect(logintemplateButtonElement).toBeInTheDocument();
  expect(logintemplateButtonElement).toBeDisabled();
});

test("should render logintemplate with enabled button - both inputs filled, email regex correct", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
  const logintemplateLoginElement = screen.getByTestId(
    "loginform-textinput-login"
  );
  expect(logintemplateLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(logintemplateLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.pl");

  const logintemplatePasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(logintemplatePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    logintemplatePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "test");

  const logintemplateButtonElement = screen.getByTestId("login-button-id");
  expect(logintemplateButtonElement).toBeInTheDocument();
  expect(logintemplateButtonElement).not.toBeDisabled();
});

test("should handle onClick on button", () => {
  const handleClick = jest.fn();
  renderWithProviders(<LoginTemplate {...props} onLoginSubmit={handleClick} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
  const logintemplateLoginElement = screen.getByTestId(
    "loginform-textinput-login"
  );
  expect(logintemplateLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(logintemplateLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.pl");

  const logintemplatePasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(logintemplatePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    logintemplatePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "test");

  const logintemplateButtonElement = screen.getByTestId("login-button-id");
  expect(logintemplateButtonElement).toBeInTheDocument();
  expect(logintemplateButtonElement).not.toBeDisabled();

  fireEvent.click(logintemplateButtonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should render logintemplate with disabled button - both inputs filled, email regex incorrect", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
  const logintemplateLoginElement = screen.getByTestId(
    "loginform-textinput-login"
  );
  expect(logintemplateLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(logintemplateLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "t");

  const logintemplatePasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(logintemplatePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    logintemplatePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const logintemplateButtonElement = screen.getByTestId("login-button-id");
  expect(logintemplateButtonElement).toBeInTheDocument();
  expect(logintemplateButtonElement).toBeDisabled();
});

test("should render logintemplate with disabled button - login filled, email regex correct", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
  const logintemplateLoginElement = screen.getByTestId(
    "loginform-textinput-login"
  );
  expect(logintemplateLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(logintemplateLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.eu");

  const logintemplateButtonElement = screen.getByTestId("login-button-id");
  expect(logintemplateButtonElement).toBeInTheDocument();
  expect(logintemplateButtonElement).toBeDisabled();
});

test("should render logintemplate with disabled button - password filled", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
  const logintemplatePasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(logintemplatePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    logintemplatePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const logintemplateButtonElement = screen.getByTestId("login-button-id");
  expect(logintemplateButtonElement).toBeInTheDocument();
  expect(logintemplateButtonElement).toBeDisabled();
});

test("should handle onClick on link", () => {
  const handleClick = jest.fn();
  renderWithProviders(<LoginTemplate {...props} onLinkClick={handleClick} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();

  const logintemplateLinkElement = screen.getByTestId("loginform-link");
  expect(logintemplateLinkElement).toBeInTheDocument();

  fireEvent.click(logintemplateLinkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("should handle click on checkbox", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();

  const logintemplateCheckboxAreaElement = screen.getByTestId(
    "loginform-CheckboxArea"
  );
  expect(logintemplateCheckboxAreaElement).toBeInTheDocument();

  const checkboxElement = within(logintemplateCheckboxAreaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxElement).not.toBeChecked();
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
});

test("should render email textfield with red border when invalid (eg. regex)", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
  const logintemplateLoginElement = screen.getByTestId(
    "loginform-textinput-login"
  );
  expect(logintemplateLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(logintemplateLoginElement).getByTestId(
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
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();
  const logintemplateLoginElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(logintemplateLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(logintemplateLoginElement).getByTestId(
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
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();

  const checkboxareaElement = screen.getByTestId("loginform-CheckboxArea");
  expect(checkboxareaElement).toBeInTheDocument();
  const checkboxareaCheckboxElement = within(checkboxareaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxareaCheckboxElement).toBeInTheDocument();
  expect(checkboxareaCheckboxElement).not.toBeChecked();
});

test("should switch checkbox status after click", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const logintemplateElement = screen.getByTestId("test-logintemplate-id");
  expect(logintemplateElement).toBeInTheDocument();

  const checkboxareaElement = screen.getByTestId("loginform-CheckboxArea");
  expect(checkboxareaElement).toBeInTheDocument();
  const checkboxareaCheckboxElement = within(checkboxareaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxareaCheckboxElement).toBeInTheDocument();
  fireEvent.click(checkboxareaCheckboxElement);
  expect(checkboxareaCheckboxElement).toBeChecked();
});

test("should render header with text", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const headerElement = screen.getByTestId("logintemplate-header");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("LOGIN");
});

test("should render breakline with text", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const breaklineElement = screen.getByTestId("logintemplate-breakline");
  expect(breaklineElement).toBeInTheDocument();
  expect(breaklineElement).toHaveTextContent("OR");
});

test("should render signupform", () => {
  renderWithProviders(<LoginTemplate {...props} />);
  const signupformElement = screen.getByTestId("logintemplate-socialicons");
  expect(signupformElement).toBeInTheDocument();
});

test("should handle clicks", () => {
  const handleClick = jest.fn();
  renderWithProviders(<LoginTemplate {...props} onIconClick={handleClick} />);
  const signupformElement = screen.getByTestId("logintemplate-socialicons");
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
  renderWithProviders(<LoginTemplate {...props} />);
  const linkElement = screen.getByTestId("logintemplate-link");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("SIGN UP");
});

test("should handle onClick event", () => {
  const handleClick = jest.fn();
  renderWithProviders(<LoginTemplate {...props} onLinkClick={handleClick} />);
  const linkElement = screen.getByTestId("logintemplate-link");
  fireEvent.click(linkElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
