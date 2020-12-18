import React from 'react'
/* eslint-disable no-restricted-imports */
import { StylesProvider } from '@material-ui/core/styles'
import { Story } from '@storybook/react'
/* eslint-enable no-restricted-imports */
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { createGlobalStyle } from 'styled-components'

import { monorailTheme } from '@monorail/helpers/theme'
import { ThemeProvider } from '@monorail/v2/core/theme/ThemeProvider'

/**
 * Temporary fix for https://github.com/dequelabs/axe-core/issues/2587
 *
 * Delete after https://github.com/jsdom/jsdom/issues/3064 is fixed
 */
const TemporaryJSDomFix = createGlobalStyle`
  svg title {
    display: inline;
}
`

/**
 * Renders content for tests inside theme providers
 */
export function renderWithTheme(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult {
  return render(
    <StylesProvider injectFirst>
      <TemporaryJSDomFix />
      <ThemeProvider theme={monorailTheme}>{ui}</ThemeProvider>
    </StylesProvider>,
    options,
  )
}

/**
 * Renders a Storybook story for testing
 */
export function renderStory(
  Story: Story,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult {
  return renderWithTheme(<Story {...Story.args} />, options)
}
