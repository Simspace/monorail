import { Autocomplete as MuiAutocomplete } from '@mui/material'

declare module '@mui/material/Autocomplete' {
  interface AutocompletePropsSizeOverrides {
    large: true
  }
}

/**
 *
 * Demos:
 *
 * - [Autocomplete](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-autocomplete--default)
 * - [Autocomplete (MUI)](https://mui.com/material-ui/react-autocomplete/)
 *
 * API:
 *
 * - [Autocomplete API](https://mui.com/material-ui/api/autocomplete/)
 */
export const Autocomplete: typeof MuiAutocomplete = MuiAutocomplete

export * from '@mui/material/Autocomplete'
