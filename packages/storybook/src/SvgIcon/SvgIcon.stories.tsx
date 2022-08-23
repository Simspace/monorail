// Edit this file to add new stories
import React from 'react'
import { SvgIcon, SvgIconProps } from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for SvgIcon stories - update/extend as needed
 */
export default { title: 'Data Display/SvgIcon', component: SvgIcon }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SvgIconProps>(args => <SvgIcon {...args} />, {
  args: {},
  muiName: 'MuiSvgIcon',
})
/** Default story for SvgIcon (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
