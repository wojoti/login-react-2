/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import LoginTemplate from "./LoginTemplate";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <MemoryRouter>
    <LoginTemplate {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
