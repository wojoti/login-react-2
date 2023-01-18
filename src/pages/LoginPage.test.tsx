/* eslint-disable @typescript-eslint/no-unused-vars */
import { store } from "@/store/store";
import renderWithProviders from "@/test-utils";
import { fireEvent, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import LoginPage, { LoginPageProps } from "./LoginPage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const props: LoginPageProps = {
  testId: "test-logintemplate-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <LoginPage {...props} />
    </Provider>
  ).toJSON();
  // const tree = renderWithProviders(<LoginPage {...props} />);
  expect(tree).toMatchSnapshot();
});

test("should render loginpage", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();
});

test("should render loginpage default disabled button ", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();
  const loginpageButtonElement = screen.getByTestId("login-button-id");
  expect(loginpageButtonElement).toBeInTheDocument();
  expect(loginpageButtonElement).toBeDisabled();
});

test("should render loginpage with enabled button - both inputs filled, email regex correct", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();
  const loginpageLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginpageLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginpageLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.pl");

  const loginpagePasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginpagePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(loginpagePasswordElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "test");

  const loginpageButtonElement = screen.getByTestId("login-button-id");
  expect(loginpageButtonElement).toBeInTheDocument();
  expect(loginpageButtonElement).not.toBeDisabled();
});

test("should render loginpage with disabled button - both inputs filled, email regex incorrect", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();
  const loginpageLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginpageLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginpageLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "t");

  const loginpagePasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginpagePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(loginpagePasswordElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const loginpageButtonElement = screen.getByTestId("login-button-id");
  expect(loginpageButtonElement).toBeInTheDocument();
  expect(loginpageButtonElement).toBeDisabled();
});

test("should render loginpage with disabled button - login filled, email regex correct", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();
  const loginpageLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginpageLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginpageLoginElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldLoginElement).toBeInTheDocument();
  userEvent.type(textfieldLoginElement, "test@test.eu");

  const loginpageButtonElement = screen.getByTestId("login-button-id");
  expect(loginpageButtonElement).toBeInTheDocument();
  expect(loginpageButtonElement).toBeDisabled();
});

test("should render loginpage with disabled button - password filled", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();
  const loginpagePasswordElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginpagePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(loginpagePasswordElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "pwd");

  const loginpageButtonElement = screen.getByTestId("login-button-id");
  expect(loginpageButtonElement).toBeInTheDocument();
  expect(loginpageButtonElement).toBeDisabled();
});

test("should handle click on checkbox", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();

  const loginpageCheckboxAreaElement = screen.getByTestId(
    "loginform-CheckboxArea"
  );
  expect(loginpageCheckboxAreaElement).toBeInTheDocument();

  const checkboxElement = within(loginpageCheckboxAreaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxElement).not.toBeChecked();
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
});

test("should render email textfield with red border when invalid (eg. regex)", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();
  const loginpageLoginElement = screen.getByTestId("loginform-textinput-login");
  expect(loginpageLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginpageLoginElement).getByTestId(
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
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();
  const loginpageLoginElement = screen.getByTestId(
    "loginform-textinput-password"
  );
  expect(loginpageLoginElement).toBeInTheDocument();
  const textfieldLoginElement = within(loginpageLoginElement).getByTestId(
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
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();

  const checkboxareaElement = screen.getByTestId("loginform-CheckboxArea");
  expect(checkboxareaElement).toBeInTheDocument();
  const checkboxareaCheckboxElement = within(checkboxareaElement).getByTestId(
    "checkboxarea-checkbox"
  );
  expect(checkboxareaCheckboxElement).toBeInTheDocument();
  expect(checkboxareaCheckboxElement).not.toBeChecked();
});

test("should switch checkbox status after click", () => {
  renderWithProviders(<LoginPage {...props} />);
  const loginpageElement = screen.getByTestId("test-logintemplate-id");
  expect(loginpageElement).toBeInTheDocument();

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
  renderWithProviders(<LoginPage {...props} />);
  const headerElement = screen.getByTestId("logintemplate-header");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("LOGIN");
});

test("should render breakline with text", () => {
  renderWithProviders(<LoginPage {...props} />);
  const breaklineElement = screen.getByTestId("logintemplate-breakline");
  expect(breaklineElement).toBeInTheDocument();
  expect(breaklineElement).toHaveTextContent("OR");
});

test("should render signupform", () => {
  renderWithProviders(<LoginPage {...props} />);
  const signupformElement = screen.getByTestId("logintemplate-socialicons");
  expect(signupformElement).toBeInTheDocument();
});

test("should render matching link with text", () => {
  renderWithProviders(<LoginPage {...props} />);
  const linkElement = screen.getByTestId("logintemplate-link");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("SIGN UP");
});
