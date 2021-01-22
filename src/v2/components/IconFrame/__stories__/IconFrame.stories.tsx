import React from 'react'

import { meta, story } from '@monorail/helpers/storybook'
import META from '@monorail/v2/components/IconFrame/__stories__/IconFrame.meta.json'
import {
  IconFrame,
  IconFrameProps,
} from '@monorail/v2/components/IconFrame/IconFrame'
import { styled } from '@monorail/exports'
import CheckCircle from '@material-ui/icons/CheckCircle'

export default meta(META, {
  title: 'monorail/component/IconFrame',
})

const IconFrameTestContent = () => <CheckCircle />

const Template = story<IconFrameProps>(args => (
  <IconFrame {...args}>
    <IconFrameTestContent />
  </IconFrame>
))

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion

export const FrameSize = story(Template, { args: { frameSize: 140 } })
