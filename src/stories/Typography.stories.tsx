import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './helpers/components/List';
import ListItem from './helpers/components/ListItem';
import Typography from '../components/base/Typography';

export default {
  title: 'Base/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Typography>;

const AllVariants: ComponentStory<typeof Typography> = () => (
  <List>
    <ListItem>
      <Typography variant='h1'>h1</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='h2'>h2</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='h3'>h3</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='h4'>h4</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='h5'>h5</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='h6'>h6</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='body'>body</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='caption'>caption</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='label'>label</Typography>
    </ListItem>
    <ListItem>
      <Typography variant='overline'>overline</Typography>
    </ListItem>
  </List>
);
export const Variant = AllVariants.bind({});
Variant.parameters = {
  controls: { hideNoControlsWarning: true },
};

const AllColor: ComponentStory<typeof Typography> = () => (
  <List>
    <ListItem>
      <Typography>Default</Typography>
    </ListItem>
    <ListItem>
      <Typography color='primary'>Primary</Typography>
    </ListItem>
    <ListItem>
      <Typography color='secondary'>Secondary</Typography>
    </ListItem>
    <ListItem>
      <Typography color='info'>Info</Typography>
    </ListItem>
    <ListItem>
      <Typography color='warning'>Warning</Typography>
    </ListItem>
    <ListItem>
      <Typography color='success'>Success</Typography>
    </ListItem>
    <ListItem>
      <Typography color='error'>Error</Typography>
    </ListItem>
  </List>
);
export const Color = AllColor.bind({});
Color.parameters = {
  controls: { hideNoControlsWarning: true },
};
