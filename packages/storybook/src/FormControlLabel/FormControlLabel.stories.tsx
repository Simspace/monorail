// Edit this file to add new stories
import React from 'react'

import type { FormControlLabelProps } from '@monorail/components'
import { Checkbox, FormControlLabel, FormGroup, Radio, Switch } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/FormControlLabel', component: FormControlLabel }
const Template = story<FormControlLabelProps>(
  (args: Partial<FormControlLabelProps>) => (
    <FormGroup>
      <FormControlLabel label='Checkbox' control={<Checkbox />} {...args} />
      <FormControlLabel control={<Switch />} label='Switch' {...args} />
      <FormControlLabel control={<Radio />} label='Radio' {...args} />
    </FormGroup>
  ),
  {
    args: {},
    muiName: 'MuiFormControlLabel',
  },
)

/**
 * `FormControlLabel` can be used to add an aligned label to an input.
 */
export const Default = story(Template)
