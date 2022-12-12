import Navbar from '@/components/Navbar';

import { ComponentMeta, ComponentStory } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;
export const Default = Template.bind({});

Default.args = {};
