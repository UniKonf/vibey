import Event from '@/components/Event';

import { ComponentMeta, ComponentStory } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Event',
  component: Event,
} as ComponentMeta<typeof Event>;

const Template: ComponentStory<typeof Event> = (args) => <Event {...args} />;
export const Default = Template.bind({});

Default.args = {
  event: {
    id: 1,
    title: 'Event 1',
    description: 'Event 1 description',
    link: 'https://www.google.com',
    socials: [
      { name: 'facebook', link: 'https://www.facebook.com' },
      { name: 'twitter', link: 'https://www.twitter.com' },
    ],
    themes: ['theme1', 'theme2'],
    startTime: '1',
    endTime: '1',
  },
};
