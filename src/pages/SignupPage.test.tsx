/* eslint-disable @typescript-eslint/no-unused-vars */
import { store } from "@/store/store";
import renderWithProviders from "@/test-utils";
import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import SignupPage, { SignupPageProps } from "./SignupPage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const props: SignupPageProps = {
  testId: "test-signuptemplate-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <SignupPage {...props} />
    </Provider>
  ).toJSON();
  // const tree = renderWithProviders(<SignupPage {...props} />);
  expect(tree).toMatchSnapshot();
});

test("should render signuppage", () => {
  renderWithProviders(<SignupPage {...props} />);
  const signuppageElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuppageElement).toBeInTheDocument();
});

test("should render signuppage default disabled button ", () => {
  renderWithProviders(<SignupPage {...props} />);
  const signuppageElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuppageElement).toBeInTheDocument();
  const signuppageButtonElement = screen.getByTestId("signup-button-id");
  expect(signuppageButtonElement).toBeInTheDocument();
  expect(signuppageButtonElement).toBeDisabled();
});

test("should render signuppage with enabled button - both inputs filled, email regex correct", () => {
  renderWithProviders(<SignupPage {...props} />);
  const signuppageElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuppageElement).toBeInTheDocument();
  const signuppageSignupElement = screen.getByTestId(
    "signupform-textinput-login"
  );
  expect(signuppageSignupElement).toBeInTheDocument();
  const textfieldSignupElement = within(signuppageSignupElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldSignupElement).toBeInTheDocument();
  userEvent.type(textfieldSignupElement, "test@test.pl");

  const signuppagePasswordElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signuppagePasswordElement).toBeInTheDocument();
  const textfieldPasswordElement = within(
    signuppagePasswordElement
  ).getByTestId("textinput-textfield");
  expect(textfieldPasswordElement).toBeInTheDocument();
  userEvent.type(textfieldPasswordElement, "test");

  const signuppageButtonElement = screen.getByTestId("signup-button-id");
  expect(signuppageButtonElement).toBeInTheDocument();
  expect(signuppageButtonElement).not.toBeDisabled();
});

test("should not render password textfield with red border when invalid'", () => {
  renderWithProviders(<SignupPage {...props} />);
  const signuppageElement = screen.getByTestId("test-signuptemplate-id");
  expect(signuppageElement).toBeInTheDocument();
  const signuppageSignupElement = screen.getByTestId(
    "signupform-textinput-password"
  );
  expect(signuppageSignupElement).toBeInTheDocument();
  const textfieldSignupElement = within(signuppageSignupElement).getByTestId(
    "textinput-textfield"
  );
  expect(textfieldSignupElement).toBeInTheDocument();
  userEvent.type(textfieldSignupElement, "t");
  expect(textfieldSignupElement).not.toHaveStyleRule(
    "border",
    "2px solid rgb(244 63 94)"
  );
});

test("should render header with text", () => {
  renderWithProviders(<SignupPage {...props} />);
  const headerElement = screen.getByTestId("signuptemplate-header");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("SIGN UP");
});

test("should render breakline with text", () => {
  renderWithProviders(<SignupPage {...props} />);
  const breaklineElement = screen.getByTestId("signuptemplate-breakline");
  expect(breaklineElement).toBeInTheDocument();
  expect(breaklineElement).toHaveTextContent("OR");
});

test("should render signupform", () => {
  renderWithProviders(<SignupPage {...props} />);
  const signupformElement = screen.getByTestId("signuptemplate-socialicons");
  expect(signupformElement).toBeInTheDocument();
});

test("should render matching link with text", () => {
  renderWithProviders(<SignupPage {...props} />);
  const linkElement = screen.getByTestId("signuptemplate-link");
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent("LOGIN");
});
