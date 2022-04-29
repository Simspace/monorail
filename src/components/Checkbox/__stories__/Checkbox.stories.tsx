// Edit this file to add new stories
import React from 'react'
import { Checkbox, CheckboxProps } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for Checkbox stories - update/extend as needed
 */
export default { title: 'Inputs/Checkbox', component: Checkbox }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CheckboxProps>(args => <Checkbox {...args} />, {
  args: { inputProps: { 'aria-label': 'Checkbox' } },
})

/** Default story for Checkbox (edit/remove by hand if needed) */
export const Default = story(Template)

// TODO: add more stories below
