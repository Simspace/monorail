import React from 'react'
import { action } from '@storybook/addon-actions'

import { DISABLED_ARG_TYPE, meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/TextField/__stories__/TextField.meta.json'
import {
  TextField,
  TextFieldProps,
} from '@monorail/v2/core/TextField/TextField'

export default meta(META, {
  title: 'monorail/core/TextField',
})

const Template = story<TextFieldProps>(args => (
  <TextField id="test-id-for-a11y" {...args} />
))

//#region Hero story in Docs
export const Empty = story(Template, {
  args: {
    inputProps: { 'aria-label': 'Without a label, aria-label must be defined' },
  },
})
//#endregion

export const WithLabel = story(Template, { args: { label: 'Hey!' } })

export const WithHelperText = story(Template, {
  args: { label: 'Hey!', helperText: 'Helper text' },
})
