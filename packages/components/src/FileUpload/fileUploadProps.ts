import type { SxProps, Theme } from '@mui/material'

import type { DataAttributes, StandardElementProps } from '@monorail/types'

import type { BoxProps } from '../Box.js'
import type { ButtonProps } from '../Button.js'
import type { FormControlProps } from '../FormControl.js'
import type { InputLabelProps } from '../InputLabel.js'
import type { StackProps } from '../Stack.js'
import type { TypographyProps } from '../Typography.js'
import type { FileUploadClasses } from './fileUploadClasses'

type FileUploadStatus =
  | 'initial'
  | 'dropping'
  | 'uploaded'
  | 'inProgress'
  | 'error'

export interface FileUploadProps
  extends StandardElementProps<'div', 'onChange' | 'color'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<FileUploadClasses>
  /**
   * The file to upload.
   */
  files: ReadonlyArray<File> | null
  /**
   * Progress of the upload.
   */
  uploadProgress: number | null
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, the component is in an error state.
   * @default false
   */
  error?: boolean
  /**
   * The status of the FileUpload component.
   * @default 'initial'
   */
  status?: FileUploadStatus
  /**
   * If `true`, the `dropTarget` element will only be visible while a file is being dragged into the viewport.
   * @default false
   */
  isDragging?: boolean
  /**
   * The component maps the `status` prop to a range of different icons,
   * for instance `uploaded` to `<UploadFile>`.
   * If you wish to change this mapping, you can provide your own.
   */
  iconMapping?: Partial<Record<FileUploadStatus, React.ReactNode>>
  /**
   * Callback fired when the value is changed.
   */
  onChange: (files: ReadonlyArray<File> | null) => void
  /**
   * If `true`, the `dropTarget` element will only be visible while a file is being dragged into the viewport.
   * @default false
   */
  onlyVisibleWhileDragging?: boolean
  /**
   * The content of the `FormLabel` component.
   */
  label?: string
  /**
   * If true, the label is displayed as required and the input element is required.
   * @default false
   */
  required?: boolean
  /**
   * The main helper text element.
   */
  helperTextPrimary?: string
  /**
   * The secondary helper text element.
   */
  helperTextSecondary?: string
  /**
   * The main error text element.
   */
  errorTextPrimary?: string
  /**
   * The secondary error text element.
   */
  errorTextSecondary?: string
  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  slotProps?: {
    root?: Partial<FormControlProps & DataAttributes>
    dropTarget?: Partial<BoxProps & DataAttributes>
    content?: Partial<StackProps & DataAttributes>
    textPrimary?: Partial<TypographyProps & DataAttributes>
    textSecondary?: Partial<TypographyProps & DataAttributes>
    action?: Partial<ButtonProps & DataAttributes>
    label?: Partial<InputLabelProps & DataAttributes>
  }
  sx?: SxProps<Theme>
  /**
   * Allow multiple files to be uploaded.
   * @default false
   */
  multiple?: boolean
  accept?: string
}
