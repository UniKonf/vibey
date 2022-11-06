import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '.';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;
export const Default = Template.bind({});

Default.args = {};
