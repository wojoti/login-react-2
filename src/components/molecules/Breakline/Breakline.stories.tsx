import { ComponentMeta, ComponentStory } from "@storybook/react";

import Breakline from "./Breakline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/Breakline",
  component: Breakline,
} as ComponentMeta<typeof Breakline>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breakline> = (args) => (
  <Breakline {...args} />
);

export const Example = Template.bind({});
Example.args = { children: "OR" };
