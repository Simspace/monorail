import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  DISABLED_ACTIONS,
  DISABLED_ARG_TYPE,
  DISABLED_CONTROLS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Button/__stories__/Button.meta.json'
import { Button, ButtonProps } from '@monorail/v2/core/Button/Button'

export default meta(META, {
  title: 'monorail/core/Button',
  argTypes: {
    action: DISABLED_ARG_TYPE,
    ref: DISABLED_ARG_TYPE,
    buttonRef: DISABLED_ARG_TYPE,
    focusVisibleClassName: DISABLED_ARG_TYPE,
  },
})

const Template = story<ButtonProps>(args => <Button {...args} />, {
  args: {
    onClick: action('onClick'),
    children: 'Button',
  },
})

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion

//#region Distinct configurations
export const Disabled = story(Template, {
  args: {
    disabled: true,
  },
})
//#endregion

//#region Prop showcases
export const PrimaryDisplay = story(
  () => (
    <>
      <Button display="primary">Primary</Button>
      <Button display="primary" disabled>
        Disabled
      </Button>
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
      <Button display="outline">Outline</Button>
      <Button display="outline" disabled>
        Disabled
      </Button>
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
      <Button display="chromeless">Chromeless</Button>
      <Button display="chromeless" disabled>
        Disabled
      </Button>
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
      <Button display="chromelessContrast">Chromeless Contrast</Button>
      <Button display="chromelessContrast" disabled>
        Disabled
      </Button>
    </>
  ),
  {
    storyName: 'ChromelessContrast Display',
    parameters: {
      ...DISABLED_ACTIONS,
      ...DISABLED_CONTROLS,
      backgrounds: { default: 'dark' },
    },
  },
)
//#endregion
