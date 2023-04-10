import type { SelectProps as MuiSelectProps } from '@mui/material'
import { Select as MuiSelect } from '@mui/material'

export interface SelectChangeEvent<T>
  extends Omit<React.ChangeEvent<HTMLInputElement>, 'target'> {
  target: Omit<React.ChangeEvent<HTMLInputElement>['target'], 'value'> & {
    value: T
  }
}

export interface SelectProps<T = unknown>
  extends Omit<MuiSelectProps<T>, 'onChange' | 'renderValue' | 'value'> {
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value?: T
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<T>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange?: (event: SelectChangeEvent<T>, child: React.ReactNode) => void
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue?: (value: T) => React.ReactNode
}

/**
 *
 * Demos:
 *
 * - [Slect](https://simspace.github.io/monorail/main/storybook/?path=/docs/inputs-select--default)
 * - [Selects (MUI)](https://mui.com/material-ui/react-select/)
 *
 * API:
 *
 * - [Select API](https://mui.com/material-ui/api/select/)
 * - inherits [OutlinedInput API](https://mui.com/material-ui/api/outlined-input/)
 */
export const Select = MuiSelect as <T = unknown>(
  props: SelectProps<T>,
) => JSX.Element

export * from '@mui/material/Select'
