import React from 'react';
import Button from '../app/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '1',
};

export const Operator = Template.bind({});
Operator.args = {
  label: '+',
};
