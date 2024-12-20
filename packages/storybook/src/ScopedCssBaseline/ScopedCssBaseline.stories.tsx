// Edit this file to add new stories
import React from 'react'

import type { ScopedCssBaselineProps } from '@monorail/components'
import { ScopedCssBaseline } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default {
  title: 'Utils/ScopedCssBaseline',
  component: ScopedCssBaseline,
}

const Template = story<ScopedCssBaselineProps>(
  (args) => (
    <ScopedCssBaseline {...args}>
      <div>
        <code>ScopedCssBaseline</code> is useful when you need a CSS reset/normalization at a level
        in the app that is more scoped. You might be progressively migrating a website to
        Material-UI, using a global reset might not be an option. It's possible to apply the
        baseline only to the children by using the ScopedCssBaseline component.
      </div>
    </ScopedCssBaseline>
  ),
  { args: {}, muiName: 'MuiScopedCssBaseline' },
)

export const Default = story(Template)
