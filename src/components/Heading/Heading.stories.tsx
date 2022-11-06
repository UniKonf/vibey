import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from '.';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  btnText: 'Explore',
  title: 'Upcoming Conf',
  href: '/',
};
export const NoButton = Template.bind({});

NoButton.args = {
  title: 'Explore',
};
