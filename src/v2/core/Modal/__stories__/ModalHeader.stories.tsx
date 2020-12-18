import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  A11Y_ELEMENT__COMPONENT,
  A11Y_ELEMENT__ROOT,
  DISABLED_ARG_TYPE,
  DISABLED_CONTROLS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Modal/__stories__/ModalHeader.meta.json'
import {
  ModalHeader,
  ModalHeaderProps,
} from '@monorail/v2/core/Modal/ModalHeader'
import * as Icons from '@monorail/v2/icons/Icons'

export default meta(META, {
  title: 'monorail/core/Modal/ModalHeader',
  argTypes: {
    ref: DISABLED_ARG_TYPE,
  },
  parameters: {
    ...A11Y_ELEMENT__COMPONENT,
  },
})

const BASIC_PROPS = {
  title: 'This is a title',
  onClose: action('onClose'),
} as const

const Template = story<ModalHeaderProps>(
  args => <ModalHeader title={BASIC_PROPS.title} {...args} />,
  {
    args: {
      ...BASIC_PROPS,
    },
  },
)

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion

//#region Distinct configurations
export const StartAdornment = story(Template, {
  args: { startAdornment: <Icons.Crown /> },
})

export const EndAdornment = story(Template, {
  args: { endAdornment: <Icons.Crown /> },
})

export const BothAdornments = story(Template, {
  args: {
    startAdornment: <Icons.Crown />,
    endAdornment: <Icons.Crown />,
  },
})
//#endregion

//#region Prop showcases
export const AllSizes = story(
  () => (
    <div
      css={`
        display: flex;
        flex-direction: column;
        gap: 24px;
      `}
    >
      <ModalHeader {...BASIC_PROPS} size="mini" title="mini" />
      <ModalHeader {...BASIC_PROPS} size="small" title="small" />
      <ModalHeader {...BASIC_PROPS} size="medium" title="medium" />
      <ModalHeader {...BASIC_PROPS} size="large" title="large" />
      <ModalHeader {...BASIC_PROPS} size="fullScreen" title="fullScreen" />
    </div>
  ),
  {
    parameters: {
      ...DISABLED_CONTROLS,
      ...A11Y_ELEMENT__ROOT,
    },
  },
)
//#endregion
