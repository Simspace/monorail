import { Components, Theme } from '@mui/material'

export const MonorailTextFieldOverrides: Components<Theme>['MuiTextField'] = {
  defaultProps: {
    // Guarantees TextFields will have consistent heights
    // https://mui.com/components/text-fields/#helper-text
    helperText: ' ',
  },
  /**
   * The following styles are located in:
   * margin - FormControl/themeOverrides.ts
   * label - InputLabel/themeOverrides.ts
   * focus styles - InputBase/themeOverrides.ts
   * input, input size, input adornment - OutlinedInput/themeOverrides.ts
   * helper text - FormHelperText/themeOverrides.ts
   */
  styleOverrides: {},
}
