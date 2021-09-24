import { PaletteOptions, createTheme, colors } from '@mui/material'

import { adaptV4Theme } from '@mui/material/styles';

import { defaultLightTheme } from './defaultLightTheme'

const palette: PaletteOptions = {
  ...defaultLightTheme.palette,
  primary: {
    main: colors.purple[500],
  },
}

export const pcteLightTheme = createTheme(adaptV4Theme({
  ...defaultLightTheme,
  palette,
}, {}))
