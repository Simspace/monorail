import { InputBaseProps } from './InputBase.gen'

export const defaultProps: InputBaseProps = {
  autoComplete: undefined,
  autoFocus: false,
  classes: undefined,
  color: 'primary',
  // Given undefined components MUI does not fallback to a default element,
  // so we won't be able to show this prop in the knobs
  // AR 2021-08-10
  // components: {
  // 	Root: undefined,
  // 	Input: undefined
  // }
  componentsProps: undefined,
  defaultValue: undefined,
  disabled: false,
  endAdornment: undefined,
  error: false,
  fullWidth: false,
  id: undefined,
  inputComponent: undefined,
  inputProps: undefined,
  inputRef: undefined,
  margin: 'none',
  maxRows: undefined,
  minRows: undefined,
  multiline: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  placeholder: undefined,
  readOnly: false,
  required: false,
  rows: undefined,
  size: 'medium',
  startAdornment: undefined,
  sx: undefined,
  type: undefined,
  value: undefined,
}
