import { ComponentMeta, ComponentStory } from "@storybook/react";

import Link from "./Link";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Link",
  component: Link,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Example = Template.bind({});
Example.args = {
  decoration: "none",
  color: "rgb(107 114 128)",
  children: "Forgot Password?",
};
