 
import type React from 'react'
import type { InputBaseProps } from '@mui/material'

import type { FormHelperTextProps } from '../FormHelperText.js'
import type { IconButtonProps } from '../IconButton.js'
import type { InputLabelProps } from '../InputLabel.js'
import type { OutlinedInputProps } from '../OutlinedInput.js'
import type { TextFieldProps } from '../TextField.js'
import type { SearchClasses } from './searchClasses.js'

export interface SearchProps
  extends Omit<
    TextFieldProps,
    | 'classes'
    | 'color'
    | 'variant'
    | 'type'
    | 'select'
    | 'SelectProps'
    | 'InputProps'
    | 'inputProps'
    | 'FormHelperTextProps'
    | 'onChange'
    | 'slotProps'
  > {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SearchClasses>
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: {
    /**
     * Props applied to the [`IconButton`](https://mui.com/material-ui/api/icon-button/) element.
     */
    clearButton?: Partial<IconButtonProps>
    /**
     * Props applied to the [`OutlinedInput`](https://mui.com/material-ui/api/outlined-input/) component.
     */
    Input?: Partial<OutlinedInputProps>
    /**
     * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
     */
    input?: InputBaseProps['inputProps']
    /**
     * Props applied to the [`FormHelperText`](https://mui.com/material-ui/api/form-helper-text/) element.
     */
    formHelperText?: Partial<FormHelperTextProps>
    /**
     * Props applied to the [`InputLabel`](https://mui.com/material-ui/api/input-label/) element.
     * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
     */
    inputLabel?: Partial<InputLabelProps>
  }
  /**
   * Callback fired when the value is changed.
   *
   * @param event The event source of the callback.
   * @param value The new value
   * @param reason The reason that this callback was called
   */
  onChange?: (
    event: React.SyntheticEvent,
    value: string,
    reason: 'input' | 'clear',
  ) => void
  /**
   * Callback fired when the value is changed, debounced by the `debounceTime` prop.
   *
   * @note if `debounceTime` is `0` or `undefined`, this callback will not be called.
   * @param event The event source of the callback.
   * @param value The new value
   * @param reason The reason that this callback was called
   */
  onChangeDebounced?: (
    event: React.SyntheticEvent,
    value: string,
    reason: 'input' | 'clear',
  ) => void
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable?: boolean
  /**
   * Time to debounce `onChangeDebounced` by.
   * @note if this prop is `0` or `undefined`, `onChangeDebounced` will not be called.
   * @default 0
   */
  debounceTime?: number
}
