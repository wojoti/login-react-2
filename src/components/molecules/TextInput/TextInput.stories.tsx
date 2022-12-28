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

export const Email = Template.bind({});
Email.args = { type: "email", name: "Email", id: "email" };

export const Password = Template.bind({});
Password.args = { type: "password", name: "Password", id: "password" };
