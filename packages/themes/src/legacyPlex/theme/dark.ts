// eslint-disable-next-line no-restricted-imports
import type { Theme, ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material'

import { palette } from '../../legacy/theme/dark.js'
import { getThemeComponents } from '../../legacy/theme/themeComponents.js'
import { baseTheme } from './baseTheme.js'

// Construct a Theme with the base settings plus our customizations, but without the components overrides provided yet.
// We're doing this so we have all the base theme settings populated for doing the component-level overrides. We want
// a Theme here, rather than ThemeOptions because we want all the values to be non-optional and filled-in for the
// component overrides.
const themeWithoutComponents: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    ...palette,
  },
})

// Now create the `components` overrides using the theme we just created
const components: ThemeOptions['components'] = getThemeComponents(
  themeWithoutComponents,
)

/** The UNOFFICIAL default dark theme which combines:
 * - `baseTheme`
 * - Extended color tokens with `palette.mode` set to `'dark'`
 * - `themeComponents` component overrides
 */
export const legacyPlexDark: Theme = createTheme(
  {
    ...themeWithoutComponents,
    name: 'legacyPlexDark',
    components,
  },
  {},
)
