// Edit this file to add new stories
import React from 'react'
import { Radio, RadioProps } from '../Radio'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './Radio.stories.gen'
import { Typography } from '../../Typography/Typography'

/**
 * Metadata for Radio stories - update/extend as needed
 */
export default { ...defaultStoryMeta, title: 'Inputs/Radio' }

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
        <Radio {...args} />
        <Typography>
          See <code>RadioGroup</code> for more examples
        </Typography>
      </>
    )
  },
  { args: {} },
)

/** Default story for Radio (edit/remove by hand if needed) */
export const Default = story(Template)
