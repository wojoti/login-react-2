import { ComponentMeta, ComponentStory } from "@storybook/react";

import LoginTemplate from "./LoginTemplate";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/LoginTemplate",
  component: LoginTemplate,
} as ComponentMeta<typeof LoginTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginTemplate> = (args) => (
  <LoginTemplate {...args} />
);

export const Default = Template.bind({});
Default.args = {};
