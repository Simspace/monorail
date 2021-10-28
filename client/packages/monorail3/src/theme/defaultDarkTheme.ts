// eslint-disable-next-line no-restricted-imports
import { Theme, createTheme } from '@mui/material'

//import { baseTheme } from './baseTheme'
//import { getThemeComponents } from './themeComponents'

import { defaultLightTheme } from './defaultLightTheme'

/**
 * The default light theme which combines the `baseTheme`, the light theme overrides, and the component-level overrides.
 */
export const defaultDarkTheme: Theme = createTheme(
  {
    ...defaultLightTheme,
    // TODO: not sure if setting mode:dark does anything useful here.
    // The hope is that it would automatically adjust an existing light theme, but not sure if it does that
    palette: { ...defaultLightTheme.palette, mode: 'dark' },
  },
  {},
)
