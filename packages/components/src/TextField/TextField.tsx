import { TextField as MuiTextField } from '@mui/material'

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * *   [FormControl](https://mui.com/material-ui/api/form-control/)
 * *   [InputLabel](https://mui.com/material-ui/api/input-label/)
 * *   [FilledInput](https://mui.com/material-ui/api/filled-input/)
 * *   [OutlinedInput](https://mui.com/material-ui/api/outlined-input/)
 * *   [Input](https://mui.com/material-ui/api/input/)
 * *   [FormHelperText](https://mui.com/material-ui/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * *   using the upper case props for passing values directly to the components
 * *   using the underlying components directly as shown in the demos
 *
 * Demos:
 *
 * - [Text Field](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-textfield--default)
 * - [Autocomplete (MUI)](https://mui.com/material-ui/react-autocomplete/)
 * - [Text fields (MUI)](https://mui.com/material-ui/react-text-field/)
 *
 * API:
 *
 * - [TextField API](https://mui.com/material-ui/api/text-field/)
 * - inherits [FormControl API](https://mui.com/material-ui/api/form-control/)
 */
export const TextField: typeof MuiTextField = MuiTextField

export * from '@mui/material/TextField'
