import React from 'react';
import Display from '../app/components/Display';

export default {
  title: 'Components/Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '0',
};

export const Result = Template.bind({});
Result.args = {
  value: '42',
};
