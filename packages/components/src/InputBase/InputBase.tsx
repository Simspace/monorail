import { InputBase as MuiInputBase } from '@mui/material'

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    large: true
  }
}

/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 *
 * Demos:
 *
 * - [Input Base](https://simspace.github.io/monorail/main/storybook/?path=/docs/inputs-input-inputbase--default)
 * - [Text fields (MUI)](https://mui.com/material-ui/react-text-field/)
 *
 * API:
 *
 * - [InputBase API](https://mui.com/material-ui/api/input-base/)
 */
export const InputBase: typeof MuiInputBase = MuiInputBase

export * from '@mui/material/InputBase'
