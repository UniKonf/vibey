import SearchBar from '@/components/Search/SearchBar';

import { ComponentMeta, ComponentStory } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);
export const Default = Template.bind({});

Default.args = {};
