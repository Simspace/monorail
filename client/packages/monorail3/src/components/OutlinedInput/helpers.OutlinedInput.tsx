import { defaultProps as defaultInputBaseProps } from '../InputBase/helpers.InputBase'
import { OutlinedInputProps } from './OutlinedInput'

export const defaultProps: OutlinedInputProps = {
  ...defaultInputBaseProps,
  id: 'outlined',
  label: 'Label',
  notched: undefined,
  placeholder: 'Placeholder',
}
