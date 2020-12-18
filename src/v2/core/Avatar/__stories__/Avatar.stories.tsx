import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  A11Y_ELEMENT__COMPONENT,
  DISABLED_ACTIONS,
  DISABLED_ARG_TYPE,
  DISABLED_CONTROLS,
  ENABLED_ACTIONS,
  meta,
  story,
} from '@monorail/helpers/storybook'
import META from '@monorail/v2/core/Avatar/__stories__/Avatar.meta.json'
import { Avatar, AvatarProps } from '@monorail/v2/core/Avatar/Avatar'

export default meta(META, {
  title: 'monorail/core/Avatar',
  argTypes: {
    ref: DISABLED_ARG_TYPE,
  },
  parameters: {
    ...DISABLED_ACTIONS,
  },
})

const Template = story<AvatarProps>(args => <Avatar {...args} />, {
  parameters: {
    ...A11Y_ELEMENT__COMPONENT,
  },
})

//#region Hero story in Docs
export const Basic = story(Template)
//#endregion

//#region Distinct configurations
export const Initials = story(Template, {
  args: {
    children: 'hi',
  },
})

export const Clickable = story(Template, {
  args: { 'aria-label': 'Aria Label', onClick: action('onClick') },
  parameters: {
    ...ENABLED_ACTIONS,
  },
})
//#endregion

//#region Prop showcases
export const AllDisplays = story(
  () => (
    <>
      <Avatar display="default">de</Avatar>
      <Avatar display="team">te</Avatar>
    </>
  ),
  {
    parameters: {
      ...DISABLED_CONTROLS,
      docs: {
        storyDescription: `- \`default\`: The circular light blue avatar is used to represent a single person.  
- \`team\`: The rounded square dark blue avatar is used to represent a team or group of people.`,
      },
    },
  },
)

export const AllSizes = story(
  () => (
    <>
      <Avatar size={16}>16</Avatar>
      <Avatar size={24}>24</Avatar>
      <Avatar size={32}>32</Avatar>
      <Avatar size={40}>40</Avatar>
      <Avatar size={48}>48</Avatar>
      <Avatar size={56}>56</Avatar>
      <Avatar size={64}>64</Avatar>
    </>
  ),
  {
    parameters: {
      ...DISABLED_CONTROLS,
    },
  },
)
//#endregion
