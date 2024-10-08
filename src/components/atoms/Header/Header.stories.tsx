import { ComponentMeta, ComponentStory } from "@storybook/react";

import Header from "./Header";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Login = Template.bind({});
Login.args = {
  children: "LOGIN",
};

export const SignUp = Template.bind({});
SignUp.args = {
  children: "SIGN UP",
};
