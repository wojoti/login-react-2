/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import LoginPage from "./LoginPage";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pages/LoginPage",
  component: LoginPage,
} as ComponentMeta<typeof LoginPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginPage> = () => (
  <MemoryRouter>
    <LoginPage />
  </MemoryRouter>
);

export const Default = Template.bind({});
