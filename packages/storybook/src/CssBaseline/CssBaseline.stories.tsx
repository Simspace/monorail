// Edit this file to add new stories
import React from 'react'
import { CssBaseline, CssBaselineProps } from '@monorail/components'

import { story } from '../helpers/storybook'

/**
 * Metadata for CssBaseline stories - update/extend as needed
 */
export default { title: 'Utils/CssBaseline', component: CssBaseline }

/**
 * Story template (edit/remove by hand if needed)
 *
 * Note: there should be at least one "Default" story that uses this template with the "story" function.
 * The Template and "story" function allow the story to be setup so that it works with the Controls addon and docgen
 */
const Template = story<CssBaselineProps>(
  args => (
    <>
      <CssBaseline {...args} />
      <div>
        <code>CssBaseline</code> is a CSS reset/normalization. It is intended to
        be injected into a high-level layer of your app. Normal components
        should not need to do anything with it directly. See also{' '}
        <code>ScopedCssBaseline</code>
      </div>
    </>
  ),
  {
    args: {},
    muiName: 'MuiCssBaseline',
  },
)

/** Default story for CssBaseline (edit/remove by hand if needed) */
export const Default = story(Template)
