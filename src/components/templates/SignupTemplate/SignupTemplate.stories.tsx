import { ComponentMeta, ComponentStory } from "@storybook/react";

import SignupTemplate from "./SignupTemplate";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/SignupTemplate",
  component: SignupTemplate,
} as ComponentMeta<typeof SignupTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignupTemplate> = (args) => (
  <SignupTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};
