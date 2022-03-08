import { colors, createTheme, PaletteOptions } from '@mui/material'

import { defaultLightTheme } from './defaultLightTheme'

const palette: PaletteOptions = {
  ...defaultLightTheme.palette,
  primary: {
    hover: colors.purple[200],
    selected: colors.purple[300],
    active: colors.purple[400],
    main: colors.purple[500],
  },
}

export const pcteLightTheme = createTheme(
  {
    ...defaultLightTheme,
    palette,
  },
  {},
)
