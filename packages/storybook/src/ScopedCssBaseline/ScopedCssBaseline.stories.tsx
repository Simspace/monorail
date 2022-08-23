// Edit this file to add new stories
import React from 'react'
import { ScopedCssBaseline, ScopedCssBaselineProps } from '@monorail/components'

import { story } from '../helpers/storybook'
/**
 * Metadata for ScopedCssBaseline stories - update/extend as needed
 */
export default {
  title: 'Utils/ScopedCssBaseline',
  component: ScopedCssBaseline,
}
/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<ScopedCssBaselineProps>(
  args => (
    <ScopedCssBaseline {...args}>
      <div>
        <code>ScopedCssBaseline</code> is useful when you need a CSS
        reset/normalization at a level in the app that is more scoped. You might
        be progressively migrating a website to Material-UI, using a global
        reset might not be an option. It's possible to apply the baseline only
        to the children by using the ScopedCssBaseline component.
      </div>
    </ScopedCssBaseline>
  ),
  { args: {}, muiName: 'MuiScopedCssBaseline' },
)

/** Default story for ScopedCssBaseline (edit/remove by hand if needed) */
export const Default = story(Template)
