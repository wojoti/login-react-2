import Icon, { IconType } from "@components/atoms/Icon/Icon";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import IconButton from "./IconButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Molecules/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Google = Template.bind({});
Google.args = {
  color: "#DE5246",
  children: <Icon src={IconType.google} width={13} height={13} alt="google" />,
};

export const Facebook = Template.bind({});
Facebook.args = {
  color: "#1877f2",
  children: (
    <Icon src={IconType.facebook} width={13} height={13} alt="facebook" />
  ),
};

export const LinkedIn = Template.bind({});
LinkedIn.args = {
  color: "#0077B5",
  children: (
    <Icon src={IconType.linkedin} width={13} height={13} alt="linkedin" />
  ),
};
