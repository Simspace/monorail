// Edit this file to add new stories
import React from 'react'

import { story } from '../../../__tests__/helpers/storybook'
import { Button } from '../../Button/Button'
import { DialogActions, DialogActionsProps } from '../DialogActions'
import { defaultStoryMeta } from './DialogActions.stories.gen'
/**
 * Metadata for DialogActions stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Feedback/Dialog/DialogActions' }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<DialogActionsProps>(
  args => (
    <DialogActions {...args}>
      <Button variant="text">Action 1</Button>
      <Button variant="contained">Action 2</Button>
    </DialogActions>
  ),
  { args: {} },
)
/** Default story for DialogActions (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
