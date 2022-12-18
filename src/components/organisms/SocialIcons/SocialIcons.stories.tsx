/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SocialIcons from "./SocialIcons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organisms/SocialIcons",
  component: SocialIcons,
} as ComponentMeta<typeof SocialIcons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialIcons> = (args) => (
  <SocialIcons {...args} />
);

export const Default = Template.bind({});
Default.args = {};
