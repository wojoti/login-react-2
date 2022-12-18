/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import CheckboxArea from "./CheckboxArea";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/CheckboxArea",
  component: CheckboxArea,
} as ComponentMeta<typeof CheckboxArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckboxArea> = (args) => (
  <CheckboxArea {...args} />
);

export const Example = Template.bind({});
Example.args = { name: "remember", id: "remember", label: "Remember Me?" };
