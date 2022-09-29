import React from 'react';

import { GridItem } from './GridItem';

export default {
  title: 'GridItem',
  component: GridItem
}

const Template = (args) => <GridItem {...args} />

export const Primary = Template.bind({})
Primary.args = {}