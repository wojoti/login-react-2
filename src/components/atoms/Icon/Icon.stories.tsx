/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Icon, { IconType } from "./Icon";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Google = Template.bind({});
Google.args = {
  src: IconType.google,
  width: 16,
  height: 16,
  alt: "google",
};

export const Facebook = Template.bind({});
Facebook.args = {
  src: IconType.facebook,
  width: 16,
  height: 16,
  alt: "facebook",
};

export const LinkedIn = Template.bind({});
LinkedIn.args = {
  src: IconType.linkedin,
  width: 16,
  height: 16,
  alt: "linkedin",
};
