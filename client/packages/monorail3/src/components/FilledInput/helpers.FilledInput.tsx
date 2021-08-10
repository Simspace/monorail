import { defaultProps as defaultInputBaseProps } from '../InputBase/helpers.InputBase'
import { FilledInputProps } from './FilledInput'

export const defaultProps: FilledInputProps = {
  ...defaultInputBaseProps,
  defaultValue: '',
  disableUnderline: false,
  placeholder: 'Placeholder',
  id: 'filled',
}
