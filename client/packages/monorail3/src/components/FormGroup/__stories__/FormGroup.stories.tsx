// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { Checkbox } from '../../Checkbox/Checkbox'
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel'
import { FormGroup, FormGroupProps } from '../FormGroup'
import { defaultStoryMeta } from './FormGroup.stories.gen'
/**
 * Metadata for FormGroup stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/FormGroup' }

const Template = story<FormGroupProps>(
  args => (
    <FormGroup {...args}>
      <FormControlLabel control={<Checkbox />} label="Option 1" />
      <FormControlLabel control={<Checkbox />} label="Option 2" />
      <FormControlLabel control={<Checkbox />} label="Option 3" />
    </FormGroup>
  ),
  {
    args: {},
    parameters: {
      docs: {
        description: {
          component:
            'FormGroup is a helpful wrapper used to group selection control components.',
        },
      },
    },
  },
)
export const Default = story(Template)
