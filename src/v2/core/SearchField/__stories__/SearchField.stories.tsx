import React from 'react'

import { styled } from '@monorail/exports'
import { meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/SearchField/__stories__/SearchField.meta.json'
import {
  SearchField,
  SearchFieldClearable,
  SearchFieldProps,
} from '@monorail/v2/core/SearchField/SearchField'
import { action } from '@storybook/addon-actions'

export default meta(META, {
  title: 'monorail/core/SearchField',
})

const Template = story<SearchFieldProps>(args => (
  <SearchField id="test-id-for-a11y" />
))

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion

export const Clearable = story(() => (
  <SearchFieldClearable onClear={action('onClear')} />
))
