 
import type { Theme, ThemeOptions } from '@mui/material'
import { createTheme } from '@mui/material'

import { palette } from '../../legacy/theme/light.js'
import { getThemeComponents } from '../../legacy/theme/themeComponents.js'
import { baseTheme } from './baseTheme.js'

// #region Raw Colors (Option Tokens)
/**
 * Context-free named colors. Only meant to be used by aliases
 */

// Construct a Theme with the base settings plus our customizations, but without the components overrides provided yet.
// We're doing this so we have all the base theme settings populated for doing the component-level overrides. We want
// a Theme here, rather than ThemeOptions because we want all the values to be non-optional and filled-in for the
// component overrides.
const themeWithoutComponents: Theme = createTheme({
  ...baseTheme,
  palette,
})

// Now create the `components` overrides using the theme we just created
const components: ThemeOptions['components'] = getThemeComponents(
  themeWithoutComponents,
)

/** The default light theme which combines:
 * - `baseTheme`
 * - Extended color tokens
 * - `themeComponents` component overrides
 */
export const legacyPlexLight: Theme = createTheme(
  {
    ...themeWithoutComponents,
    name: 'legacyPlexLight',
    components,
  },
  {},
)
