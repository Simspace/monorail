import type { SxProps, Theme } from '@mui/material'

import type { StandardElementProps } from '@monorail/types'

import type { BoxProps } from '../Box.js'
import type { ButtonProps } from '../Button.js'
import type { FormControlProps } from '../FormControl.js'
import type { FormHelperTextProps } from '../FormHelperText.js'
import type { InputLabelProps } from '../InputLabel.js'
import type { StackProps } from '../Stack.js'
import type { TypographyProps } from '../Typography.js'
import type { FileUploadClasses } from './fileUploadClasses'

type FileUploadStatus =
  | 'default'
  | 'dropping'
  | 'uploaded'
  | 'progress'
  | 'error'

export interface FileUploadProps
  extends StandardElementProps<'div', 'onChange' | 'color'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FileUploadClasses>
  /**
   * The file to upload
   */
  file: File | null
  /**
   * Progress of the upload, from 0 to 100
   */
  uploadProgress: number | null
  disabled?: boolean
  error?: boolean
  status?: FileUploadStatus
  isDragging?: boolean
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping?: Partial<Record<FileUploadStatus, React.ReactNode>>
  // status?: FileUploadStatus
  /**
   * Called when the user selects a file
   *
   * @param
   * @returns
   */
  onChange: (file: File | null) => void
  /**
   * If true,
   */
  onlyVisibleWhileDragging?: boolean
  label?: string
  /**
   * If true, the label is displayed as required and the input element is required.
   * @default false
   */
  required?: boolean
  /**
   * The helper text content.
   */
  helperText?: React.ReactNode
  /**
   * The helper text content.
   */
  errorMessage?: React.ReactNode

  /**
   *
   */
  slotProps?: {
    root?: FormControlProps
    dropTarget?: BoxProps
    content?: StackProps
    dropTargetAction?: ButtonProps
    helperText?: TypographyProps
    label?: InputLabelProps
    errorMessage?: FormHelperTextProps
  }
  sx?: SxProps<Theme>
}
