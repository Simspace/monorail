// Edit this file to add new stories
import React from 'react'

import type { FormHelperTextProps } from '@monorail/components'
import {
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Inputs/FormHelperText', component: FormHelperText }

const Template = story<FormHelperTextProps>(
  (args: FormHelperTextProps) => (
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
    muiName: 'MuiFormHelperText',
  },
)

/**
 * `FormHelperText` can be used to display errors or hints. It is implicitly bundled with `TextField` as prop `helperText`
 */
export const Default = story(Template)
