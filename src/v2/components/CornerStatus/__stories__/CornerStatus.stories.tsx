import React from 'react'

import {
  A11Y_ELEMENT__COMPONENT,
  DISABLED_ACTIONS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/components/CornerStatus/__stories__/CornerStatus.meta.json'
import {
  CornerStatus,
  CornerStatusProps,
} from '@monorail/v2/components/CornerStatus/CornerStatus'
import { IconButton } from '@monorail/v2/core/IconButton/IconButton'
import { Bam } from '@monorail/v2/icons/Icons'

export default meta(META, {
  title: 'monorail/component/CornerStatus',
  parameters: { ...DISABLED_ACTIONS, ...A11Y_ELEMENT__COMPONENT },
})

const Template = story<CornerStatusProps>(args => (
  <IconButton
    shape="square"
    size="large"
    aria-label="Background Activity Monitor"
  >
    <Bam />
    <CornerStatus aria-label="there is new background activity" {...args} />
  </IconButton>
))

//#region Hero story in Docs
export const EmptyCornerStatus = story(Template)
//#endregion

//#region Distinct configurations
export const TextCornerStatus = story(Template, {
  args: { label: 'Hey!' },
})
//#endregion
