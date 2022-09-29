import React from 'react';

import { EventLabel } from './EventLabel';

export default {
  title: 'Example/EventLabel',
  component: EventLabel
}

const Template = (args) => <EventLabel {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Default Text'
}