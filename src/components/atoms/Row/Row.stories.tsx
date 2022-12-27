/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Row from "./Row";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Row",
  component: Row,
  decorators: [
    (Story) => (
      <div style={{ border: "1px solid lightgray" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Row>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Row> = (args) => (
  <Row {...args}>
    <span>Example span.</span>
    <span>Example span.</span>
    <span>Example span.</span>
  </Row>
);

export const Default = Template.bind({});
Default.args = {};
