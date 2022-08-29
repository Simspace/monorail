import { NativeSelect as MuiNativeSelect } from '@mui/material'

/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 *
 * Demos:
 *
 * - [Native Select](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-nativeselect--default)
 * - [Selects (MUI)](https://mui.com/material-ui/react-select/)
 *
 * API:
 *
 * - [NativeSelect API](https://mui.com/material-ui/api/native-select/)
 * - inherits [Input API](https://mui.com/material-ui/api/input/)
 */
export const NativeSelect: typeof MuiNativeSelect = MuiNativeSelect

export * from '@mui/material/NativeSelect'
