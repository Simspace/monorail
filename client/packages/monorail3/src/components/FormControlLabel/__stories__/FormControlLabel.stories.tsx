// Edit this file to add new stories
import React from 'react'
import {
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  Radio,
  Switch,
} from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'
/**
 * Metadata for FormControlLabel stories - update/extend as needed
 */
export default { title: 'Inputs/FormControlLabel', component: FormControlLabel }

const Template = story<FormControlLabelProps>(
  (args: Partial<FormControlLabelProps>) => (
    <FormGroup>
      <FormControlLabel label="Checkbox" control={<Checkbox />} {...args} />
      <FormControlLabel control={<Switch />} label="Switch" {...args} />
      <FormControlLabel control={<Radio />} label="Radio" {...args} />
    </FormGroup>
  ),
  {
    args: {},
    parameters: {
      docs: {
        description: {
          component:
            'FormControlLabel can be used to add an aligned label to an input ',
        },
      },
    },
  },
)
export const Default = story(Template)
