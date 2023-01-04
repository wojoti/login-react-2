import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextInput from "./TextInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const ValidEmail = Template.bind({});
ValidEmail.args = { type: "email", name: "email", id: "email", isValid: true };
export const InvalidEmail = Template.bind({});
InvalidEmail.args = {
  type: "email",
  name: "email",
  id: "email",
  isValid: false,
};

export const Password = Template.bind({});
Password.args = { type: "password", name: "password", id: "password" };
