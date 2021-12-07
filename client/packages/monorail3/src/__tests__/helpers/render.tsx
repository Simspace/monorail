/* eslint-disable no-restricted-imports */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import {
  CssBaseline,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material'
import { Story } from '@storybook/react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { createGlobalStyle } from 'styled-components'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

import { defaultLightTheme } from '../../theme/defaultLightTheme'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TemporaryJSDomFix />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={defaultLightTheme}>
          <CssBaseline />
          {ui}
        </ThemeProvider>
      </StyledEngineProvider>
    </LocalizationProvider>,
    options,
  )
}

/**
 * Renders a Storybook story for testing in jest
 */
export function renderStory(
  Story: Story,
  props?: Story['args'],
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult {
  return renderWithTheme(<Story {...Story.args} {...props} />, options)
}
