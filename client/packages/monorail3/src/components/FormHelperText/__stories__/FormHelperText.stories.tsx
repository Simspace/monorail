// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { Checkbox } from '../../Checkbox/Checkbox'
import { FormControlLabel } from '../../FormControlLabel/FormControlLabel'
import { FormHelperText, FormHelperTextProps } from '../FormHelperText'
import { defaultStoryMeta } from './FormHelperText.stories.gen'
/**
 * Metadata for FormHelperText stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/FormHelperText' }

const Template = story<FormHelperTextProps>(
  args => (
    <>
      <FormControlLabel
        control={<Checkbox onChange={() => void 0} />}
        label="Do the Thing"
      />
      <FormHelperText {...args} />
    </>
  ),
  {
    args: { children: 'FormHelperText can display errors or hints' },
    parameters: {
      docs: {
        description: {
          component:
            'FormHelperText can be used to display errors or hints. It is implicitly bundled with `TextField` as prop `helperText`',
        },
      },
    },
  },
)
/** Default story for FormHelperText (edit/remove by hand if needed) */
export const Default = story(Template)
