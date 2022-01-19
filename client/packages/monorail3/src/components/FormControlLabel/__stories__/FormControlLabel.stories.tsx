// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { Checkbox } from '../../Checkbox/Checkbox'
import { FormGroup } from '../../FormGroup/FormGroup'
import { Radio } from '../../Radio/Radio'
import { Switch } from '../../Switch/Switch'
import { FormControlLabel, FormControlLabelProps } from '../FormControlLabel'
import { defaultStoryMeta } from './FormControlLabel.stories.gen'
/**
 * Metadata for FormControlLabel stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/FormControlLabel' }

const Template = story<FormControlLabelProps>(
  args => (
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
