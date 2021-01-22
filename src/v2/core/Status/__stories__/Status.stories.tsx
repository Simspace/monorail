import React from 'react'

import { meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Status/__stories__/Status.meta.json'
import { Status, StatusProps } from '@monorail/v2/core/Status/Status'

export default meta(META, {
  title: 'monorail/core/Status',
})

const Template = story<StatusProps>(args => (
  <Status
    aria-label="Since status usually contains a number, it is helpful to provide more details to screenreaders, such as '8 turkeys'"
    {...args}
  />
))

//#region Hero story in Docs
export const Empty = story(Template)
//#endregion

export const WithLabel = story(Template, { args: { label: 'Hey!' } })
