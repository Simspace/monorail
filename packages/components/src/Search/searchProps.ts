/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react'
import type { InternalStandardProps as StandardProps } from '@mui/material'
import type { SxProps } from '@mui/system'
import type { OverridableStringUnion } from '@mui/types'

import type { Theme } from '../..'
import type { FormControlProps } from '../FormControl'
import type { FormHelperTextProps } from '../FormHelperText'
import type { InputProps as StandardInputProps } from '../Input'
import type { InputBaseProps } from '../InputBase'
import type { InputLabelProps } from '../InputLabel'
import type { OutlinedInputProps } from '../OutlinedInput'
import type { SearchClasses } from './searchClasses'

export interface SearchPropsColorOverrides {}
export interface SearchPropsSizeOverrides {}

export interface BaseSearchProps
  extends StandardProps<
    FormControlProps,
    // event handlers are declared on derived interfaces
    'onChange' | 'onBlur' | 'onFocus' | 'defaultValue'
  > {
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete?: string
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus?: boolean
  /**
   * @ignore
   */
  children?: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<SearchClasses>
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    SearchPropsColorOverrides
  >
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue?: unknown
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error?: boolean
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps?: Partial<FormHelperTextProps>
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
  /**
   * The helper text content.
   */
  helperText?: React.ReactNode
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id?: string
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps?: Partial<InputLabelProps>
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: InputBaseProps['inputProps']
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<any>
  /**
   * The label content.
   */
  label?: React.ReactNode
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline?: boolean
  /**
   * Name attribute of the `input` element.
   */
  name?: string
  onBlur?: InputBaseProps['onBlur']
  onFocus?: StandardInputProps['onFocus']
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder?: string
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required?: boolean
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: string | number
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows?: string | number
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows?: string | number
  /**
   * The size of the component.
   */
  size?: OverridableStringUnion<'small' | 'medium', SearchPropsSizeOverrides>
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown
}

export interface OutlinedSearchProps extends BaseSearchProps {
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: OutlinedInputProps['onChange']
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: 'outlined'
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps?: Partial<OutlinedInputProps>
}

export type SearchProps = OutlinedSearchProps
