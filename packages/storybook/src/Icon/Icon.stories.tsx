import React from 'react'

import type { IconProps } from '@monorail/components'
import { Icon } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Data Display/Icon', component: Icon }

const Template = story<IconProps>(
  (args: IconProps) => <Icon {...args}>i</Icon>,
  {
    args: {},
    muiName: 'MuiIcon',
  },
)

export const Default = story(Template)
