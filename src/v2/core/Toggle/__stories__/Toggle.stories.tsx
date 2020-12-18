import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  DISABLED_ACTIONS,
  DISABLED_ARG_TYPE,
  DISABLED_CONTROLS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Toggle/__stories__/Toggle.meta.json'
import { Toggle, ToggleProps } from '@monorail/v2/core/Toggle/Toggle'

export default meta(META, {
  title: 'monorail/core/Toggle',
  argTypes: {
    ref: DISABLED_ARG_TYPE,
  },
})

const BASIC_PROPS = {
  inputProps: {
    'aria-label': 'Aria Label (inputs must have labels)',
  },
  onClick: action('onClick'),
} as const

const Template = story<ToggleProps>(args => <Toggle {...args} />, {
  args: { ...BASIC_PROPS },
})

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion

//#region Distinct configurations
export const Checked = story(Template, {
  args: {
    checked: true,
  },
  parameters: {
    ...DISABLED_ACTIONS,
  },
})
//#endregion

//#region Prop showcases
export const AllSizes = story<ToggleProps>(
  () => {
    return (
      <div
        css={`
          display: flex;
          flex-direction: column;
          gap: 24px;
        `}
      >
        <Toggle {...BASIC_PROPS} size="default" />
        <Toggle {...BASIC_PROPS} size="large" />
      </div>
    )
  },
  {
    parameters: {
      ...DISABLED_CONTROLS,
      docs: {
        storyDescription: `2 sizes: 'default' and 'large'`,
      },
    },
  },
)
//#endregion
