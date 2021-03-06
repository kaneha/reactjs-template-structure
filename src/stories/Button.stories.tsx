import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './helpers/components/List';
import ListItem from './helpers/components/ListItem';
import Button from '../components/base/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'info', 'warning', 'success', 'error'],
      mapping: {
        Primary: 'primary',
        Secondary: 'secondary',
        Info: 'info',
        Warning: 'warning',
        Success: 'success',
        Error: 'error',
      },
      control: { type: 'select' },
    },
    variant: {
      options: ['outlined', 'contained'],
      mapping: {
        Outline: 'outlined',
        Contained: 'contained',
      },
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const AllVariants: ComponentStory<typeof Button> = () => (
  <List>
    <ListItem>
      <Button>Contained</Button>
    </ListItem>
    <ListItem>
      <Button variant='outlined'>Outlined</Button>
    </ListItem>
  </List>
);
export const Variant = AllVariants.bind({});
Variant.parameters = {
  controls: { hideNoControlsWarning: true },
};

const AllShapes: ComponentStory<typeof Button> = () => (
  <List>
    <ListItem>
      <Button>Square</Button>
    </ListItem>
    <ListItem>
      <Button shape='rounded'>Rounded</Button>
    </ListItem>
  </List>
);
export const Shape = AllShapes.bind({});
Shape.parameters = {
  controls: { hideNoControlsWarning: true },
};

const AllSizes: ComponentStory<typeof Button> = () => (
  <List>
    <ListItem>
      <Button size='small'>Small</Button>
    </ListItem>
    <ListItem>
      <Button size='medium'>Medium</Button>
    </ListItem>
    <ListItem>
      <Button size='large'>Large</Button>
    </ListItem>
  </List>
);
export const Size = AllSizes.bind({});
Size.parameters = {
  controls: { hideNoControlsWarning: true },
};

const AllColor: ComponentStory<typeof Button> = () => (
  <List>
    <ListItem>
      <Button>Primary</Button>
    </ListItem>
    <ListItem>
      <Button color='secondary'>Secondary</Button>
    </ListItem>
  </List>
);
export const Color = AllColor.bind({});
Color.parameters = {
  controls: { hideNoControlsWarning: true },
};

const AllDisable: ComponentStory<typeof Button> = () => (
  <List>
    <ListItem>
      <Button variant='contained' disabled>
        Contained
      </Button>
    </ListItem>
    <ListItem>
      <Button variant='outlined' disabled>
        Outlined
      </Button>
    </ListItem>
  </List>
);
export const Disable = AllDisable.bind({});
Disable.parameters = {
  controls: { hideNoControlsWarning: true },
};

const Base: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Template = Base.bind({});
Template.args = {
  children: 'Button',
};
