import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Greetings } from './greetings';

export default {
  title: 'Greetings',
  component: Greetings,
} as ComponentMeta<typeof Greetings>;

const Template: ComponentStory<typeof Greetings> = (args) => <Greetings {...args}/>;

export const Primary = Template.bind({})
Primary.args = {
  name: "Skelley"
}