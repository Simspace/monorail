// Edit this file to add new stories
import React from 'react'
import { SpeedDialIcon, SpeedDialIconProps } from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for SpeedDialIcon stories - update/extend as needed
 */
export default {
  title: 'Navigation/SpeedDial/SpeedDialIcon',
  component: SpeedDialIcon,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SpeedDialIconProps>(
  args => <SpeedDialIcon {...args} />,
  { args: {}, muiName: 'MuiSpeedDial' },
)
/** Default story for SpeedDialIcon (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
