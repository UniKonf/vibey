import { ComponentMeta, ComponentStory } from '@storybook/react';
import Hero from '.';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {};
