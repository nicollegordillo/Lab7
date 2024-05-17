import React from 'react';
import Keypad from '../app/components/Keypad';

export default {
  title: 'Components/Keypad',
  component: Keypad,
};

const Template = (args) => <Keypad {...args} />;

export const Default = Template.bind({});
Default.args = {};
