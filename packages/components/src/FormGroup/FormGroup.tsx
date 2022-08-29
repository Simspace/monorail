import { FormGroup as MuiFormGroup } from '@mui/material'

/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 *
 * Demos:
 *
 * - [Form Group](https://simspace.gitlab.io/engineering/ux-engineering/monorail/main/storybook/?path=/docs/inputs-formgroup--default)
 * - [Checkboxes (MUI)](https://mui.com/material-ui/react-checkbox/)
 * - [Switches (MUI)](https://mui.com/material-ui/react-switch/)
 *
 * API:
 *
 * - [FormGroup API](https://mui.com/material-ui/api/form-group/)
 */
export const FormGroup: typeof MuiFormGroup = MuiFormGroup

export * from '@mui/material/FormGroup'
