import React from 'react'
import { action } from '@storybook/addon-actions'

import { css } from '@monorail/helpers/exports'
import { DISABLED_ARG_TYPE, meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Slider/__stories__/Slider.meta.json'
import { Slider, SliderProps } from '@monorail/v2/core/Slider/Slider'

export default meta(META, {
  title: 'monorail/core/Slider',
  argTypes: {
    ref: DISABLED_ARG_TYPE,
    sliderRef: DISABLED_ARG_TYPE,
  },
})

const BASIC_PROPS = {
  'aria-label': 'Aria Label (inputs must have labels)',
  defaultValue: 0,
  onChange: action('onChange'),
} as const

const Template = story<SliderProps>(args => <Slider {...args} />, {
  args: { ...BASIC_PROPS },
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

export const WithValueLabel = story(
  () => {
    return (
      <div
        css={css`
          margin-top: 48px;
        `}
      >
        <Slider {...BASIC_PROPS} valueLabelDisplay="auto" defaultValue={36} />
      </div>
    )
  },
  {
    storyName: 'With Value Label',
  },
)

export const WithoutTrack = story(Template, {
  args: {
    track: false,
    defaultValue: 72,
  },
  storyName: 'Without Track',
})
//#endregion
