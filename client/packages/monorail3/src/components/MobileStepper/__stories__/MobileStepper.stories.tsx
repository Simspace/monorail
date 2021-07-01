// Edit this file to add new stories
import React from 'react'
import { MobileStepper, MobileStepperProps } from '../MobileStepper'
import { story } from '../../../__tests__/helpers/storybook'
import { defaultStoryMeta } from './MobileStepper.stories.gen'
/**
 * Metadata for MobileStepper stories - update/extend as needed
 */
export default { ...defaultStoryMeta }
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<MobileStepperProps>(
  args => (
    <MobileStepper
      steps={5}
      backButton={<>Back</>}
      nextButton={<>Next</>}
      {...args}
    />
  ),
  { args: {} },
)
/** Default story for MobileStepper (edit/remove by hand if needed) */
export const Default = story(Template)
// TODO: add more stories below
