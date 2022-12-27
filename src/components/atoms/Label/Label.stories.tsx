/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Label from "./Label";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Label",
  component: Label,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Email = Template.bind({});
Email.args = { children: "Email" };

export const Password = Template.bind({});
Password.args = { children: "Password" };

export const RememberMe = Template.bind({});
RememberMe.args = { children: "Remember Me?" };
