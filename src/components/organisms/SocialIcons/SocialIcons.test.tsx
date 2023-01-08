import { fireEvent, render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import SocialIcons, { SocialIconsProps } from "./SocialIcons";

const props: SocialIconsProps = {
  onIconClick: () => {},
  testId: "test-socialicons-id",
};

test("should match snapshot", () => {
  const tree = TestRenderer.create(<SocialIcons {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("should render signupform", () => {
  render(<SocialIcons {...props} />);
  const signupformElement = screen.getByTestId("test-socialicons-id");
  expect(signupformElement).toBeInTheDocument();
});

test("should handle clicks", () => {
  const handleClick = jest.fn();
  render(<SocialIcons {...props} onIconClick={handleClick} />);
  const signupformElement = screen.getByTestId("test-socialicons-id");
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
