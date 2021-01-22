import React from 'react'

import { AppName } from '@monorail/helpers/exports'
import { meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/components/AppIcon/__stories__/AppIcon.meta.json'
import { AppIcon, AppIconProps } from '@monorail/v2/components/AppIcon/AppIcon'

export default meta(META, {
  title: 'monorail/component/AppIcon',
})

const Template = story<AppIconProps>(args => (
  <AppIcon appName={AppName.MyOrg} {...args} />
))

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion

export const AdjustedSize = story(() => (
  <Template
    css={`
      font-size: 48px;
    `}
  />
))
