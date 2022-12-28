import { ComponentMeta, ComponentStory } from "@storybook/react";

import Column from "./Column";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Column",
  component: Column,
  decorators: [
    (Story) => (
      <div style={{ border: "1px solid lightgray" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Column>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Column> = (args) => (
  <Column {...args}>
    <span>Example span.</span>
    <span>Example span.</span>
    <span>Example span.</span>
  </Column>
);

export const Default = Template.bind({});
Default.args = {};
