import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  A11Y_ELEMENT__COMPONENT,
  DISABLED_ACTIONS,
  DISABLED_CONTROLS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/IconButton/__stories__/IconButton.meta.json'
import {
  IconButton,
  IconButtonProps,
} from '@monorail/v2/core/IconButton/IconButton'
import * as Icons from '@monorail/v2/icons/Icons'

export default meta(META, {
  title: 'monorail/core/IconButton',
})

const BASIC_PROPS = {
  'aria-label': 'Aria Label',
  children: <Icons.Crown />,
  onClick: action('onClick'),
} as const

const BasicTemplate = story<IconButtonProps>(
  args => <IconButton aria-label={BASIC_PROPS['aria-label']} {...args} />,
  {
    args: {
      ...BASIC_PROPS,
    },
    parameters: {
      ...A11Y_ELEMENT__COMPONENT,
    },
  },
)

//#region Hero story in Docs
export const Basic = story(BasicTemplate)
//#endregion

//#region Distinct configurations
export const Disabled = story(BasicTemplate, {
  args: {
    disabled: true,
  },
})
//#endregion

//#region Prop showcases
export const PrimaryDisplay = story(
  () => (
    <>
      <IconButton {...BASIC_PROPS} display="primary" />
      <IconButton {...BASIC_PROPS} display="primary" disabled />
    </>
  ),
  {
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_CONTROLS,
    },
  },
)

export const OutlineDisplay = story(
  () => (
    <>
      <IconButton {...BASIC_PROPS} display="outline" />
      <IconButton {...BASIC_PROPS} display="outline" disabled />
    </>
  ),
  {
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_CONTROLS,
    },
  },
)

export const ChromelessDisplay = story(
  () => (
    <>
      <IconButton {...BASIC_PROPS} display="chromeless" />
      <IconButton {...BASIC_PROPS} display="chromeless" disabled />
    </>
  ),
  {
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_CONTROLS,
    },
  },
)

export const ChromelessActionDisplay = story(
  () => (
    <>
      <IconButton {...BASIC_PROPS} display="chromelessAction" />
      <IconButton {...BASIC_PROPS} display="chromelessAction" disabled />
    </>
  ),
  {
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_CONTROLS,
    },
  },
)

export const ChromelessContrastDisplay = story(
  () => (
    <>
      <IconButton {...BASIC_PROPS} display="chromelessContrast" />
      <IconButton {...BASIC_PROPS} display="chromelessContrast" disabled />
    </>
  ),
  {
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_CONTROLS,
      backgrounds: { default: 'dark' },
    },
    storyName: 'ChromelessContrast Display',
  },
)

export const AllShapes = story(
  () => (
    <>
      <IconButton {...BASIC_PROPS} shape="circle" />
      <IconButton {...BASIC_PROPS} shape="square" />
    </>
  ),
  {
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_CONTROLS,
    },
  },
)

export const AllSizes = story(
  () => (
    <>
      <IconButton {...BASIC_PROPS} size="compact" />
      <IconButton {...BASIC_PROPS} size="dense" />
      <IconButton {...BASIC_PROPS} size="default" />
      <IconButton {...BASIC_PROPS} size="large" />
    </>
  ),
  {
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_CONTROLS,
    },
  },
)
//#endregion
