import { PaletteOptions, createTheme, colors } from '@mui/material'

import { defaultLightTheme } from './defaultLightTheme'

const palette: PaletteOptions = {
  ...defaultLightTheme.palette,
  primary: {
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
