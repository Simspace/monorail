// Edit this file to add new stories
import React from 'react'

import type { CssBaselineProps } from '@monorail/components'
import { CssBaseline } from '@monorail/components'

import { story } from '../helpers/storybook.js'

export default { title: 'Utils/CssBaseline', component: CssBaseline }

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

export const Default = story(Template)
