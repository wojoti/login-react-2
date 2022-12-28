import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import SignupTemplate from "./SignupTemplate";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Templates/SignupTemplate",
  component: SignupTemplate,
} as ComponentMeta<typeof SignupTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignupTemplate> = (args) => (
  <MemoryRouter>
    <SignupTemplate {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
