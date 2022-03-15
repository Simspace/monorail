// Edit this file to add new stories
import React from 'react'
import { Radio, RadioProps, Typography } from '@mui/material'

import { story } from '../../../__tests__/helpers/storybook'

/**
 * Metadata for Radio stories - update/extend as needed
 */
export default { title: 'Inputs/Radio', component: Radio }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<RadioProps>(
  args => {
    return (
      <>
        <Radio inputProps={{ 'aria-labelledby': 'radio-demo' }} {...args} />
        <Typography id="radio-demo">
          See <code>RadioGroup</code> for more examples
        </Typography>
      </>
    )
  },
  { args: {} },
)

/** Default story for Radio (edit/remove by hand if needed) */
export const Default = story(Template)
