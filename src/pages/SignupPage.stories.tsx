/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import SignupPage from "./SignupPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pages/SignupPage",
  component: SignupPage,
} as ComponentMeta<typeof SignupPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignupPage> = () => (
  <MemoryRouter>
    <SignupPage />
  </MemoryRouter>
);

export const Default = Template.bind({});
