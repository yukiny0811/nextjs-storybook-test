import React from 'react';

import { Grid } from './Grid';

export default {
  title: 'Grid',
  component: Grid
}

const Template = (args) => <Grid {...args} />

export const Primary = Template.bind({})
Primary.args = {}