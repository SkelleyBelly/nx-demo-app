import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserCard } from './user-card';

export default {
  title: 'User Card',
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args}/>;

export const Primary = Template.bind({})
Primary.args = {
  name: "Nathan Skelley",
  email: "nathan@heytempo.com"
}