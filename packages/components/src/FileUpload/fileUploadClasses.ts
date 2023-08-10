import generateUtilityClass from '@mui/utils/generateUtilityClass'
import generateUtilityClasses from '@mui/utils/generateUtilityClasses'

export interface FileUploadClasses {
  /** Styles applied to the root element. */
  root: string

  dropping: string

  uploaded: string

  default: string

  progress: string

  icon: string

  content: string

  dropTarget: string

  onlyVisibleWhileDragging: string

  isDragging: string

  status: string

  /** State class applied to the root element if `state="error"`. */
  error: string

  /** State class applied to the root element if `disabled={true}`. */
  disabled: string
  /** Styles applied to the label's Typography component. */
  label: string
}

export type FileUploadClassKey = keyof FileUploadClasses

export function getFileUploadUtilityClasses(slot: string): string {
  return generateUtilityClass('MonorailFileUpload', slot)
}

export const fileUploadClasses: FileUploadClasses = generateUtilityClasses(
  'MonorailFileUpload',
  [
    'root',
    'disabled',
    'status',
    'content',
    'dropping',
    'dropTarget',
    'uploaded',
    'icon',
    'onlyVisibleWhileDragging',
    'isDragging',
    'default',
    'progress',
    'error',
    'label',
  ],
)
