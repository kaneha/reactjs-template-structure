import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './helpers/components/List';
import ListItem from './helpers/components/ListItem';
import TextField from '../components/base/TextField';

export default {
  title: 'Base/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placeholder: {
      type: 'string',
    },
    startComp: {
      control: false,
    },
    endComp: {
      control: false,
    },
  },
} as ComponentMeta<typeof TextField>;

const Base: ComponentStory<typeof TextField> = (args) => {
  return <TextField {...args} />;
};

export const Common = Base.bind({});
