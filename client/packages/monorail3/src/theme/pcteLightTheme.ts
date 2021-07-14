import * as MUI from '@material-ui/core'

import { defaultLightTheme } from './defaultLightTheme'

const palette: MUI.PaletteOptions = {
  ...defaultLightTheme.palette,
  primary: {
    main: MUI.colors.purple[500],
  },
}

export const pcteLightTheme = MUI.createTheme(
  {
    ...defaultLightTheme,
    palette,
  },
  {},
)
