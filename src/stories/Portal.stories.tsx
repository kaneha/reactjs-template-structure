import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './helpers/components/List';
import ListItem from './helpers/components/ListItem';
import Portal from '../components/base/Portal';

export default {
  title: 'Base/Portal',
  component: Portal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof Portal>;

const Base: ComponentStory<typeof Portal> = (args) => (
  <Portal {...args} />
);