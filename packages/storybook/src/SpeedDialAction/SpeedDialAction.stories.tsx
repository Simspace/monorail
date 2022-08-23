// Edit this file to add new stories
import React from 'react'
import { SpeedDialAction, SpeedDialActionProps } from '@monorail/components'

import { story } from '../helpers/storybook.js'
/**
 * Metadata for SpeedDialAction stories - update/extend as needed
 */
export default {
  title: 'Navigation/SpeedDial/SpeedDialAction',
  component: SpeedDialAction,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<SpeedDialActionProps>(
  args => (
    <menu role="menu">
      <SpeedDialAction
        aria-label="speeddialaction"
        tooltipTitle="I am a tooltip"
        {...args}
      />
    </menu>
  ),
  { args: {}, muiName: 'MuiSpeedDialAction' },
)
/** Default story for SpeedDialAction (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
