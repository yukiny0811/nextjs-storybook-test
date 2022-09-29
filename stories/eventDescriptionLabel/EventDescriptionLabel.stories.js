import React from 'react';

import { EventDescriptionLabel } from './EventDescriptionLabel';

export default {
  title: 'Example/EventDescriptionLabel',
  component: EventDescriptionLabel
}

const Template = (args) => <EventDescriptionLabel {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Default DescriptionText'
}