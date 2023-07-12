import Button from '../components/Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: { handleClick: { action: 'handleClick' } },
};

export const Template = (args) => <Button {...args} />;

export const Lg = Template.bind({});
Lg.args = {
  size: 'lg',
  label: 'Pressione',
  color: 'white',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Pressione',
  color: 'white',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Pressione',
  color: 'white',
};
