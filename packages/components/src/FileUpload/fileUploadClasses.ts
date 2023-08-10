import generateUtilityClass from '@mui/utils/generateUtilityClass'
import generateUtilityClasses from '@mui/utils/generateUtilityClasses'

export interface FileUploadClasses {
  /** Styles applied to the root element. */
  root: string
  /** State class applied to the root element if status="default". */
  statusDefault: string
  /** State class applied to the root element if status="dropping". */
  statusDropping: string
  /** State class applied to the root element if status="progress". */
  statusProgress: string
  /** State class applied to the root element if status="uploaded". */
  statusUploaded: string
  /** Styles applied to the `FormLabel` component. */
  label: string
  /** Styles applied to `dropTarget`'s container element. */
  dropTarget: string
  /** Styles applied to `dropTarget`'s content wrapper element. */
  content: string
  /** Styles applied to the icon wrapper element. */
  icon: string
  /** If `true`, the `dropTarget` element will only be visible while a file is being dragged into the window. */
  onlyVisibleWhileDragging: string
  /** State class applied to the root element if `state="error"`. */
  error: string
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string
}

export type FileUploadClassKey = keyof FileUploadClasses

export function getFileUploadUtilityClasses(slot: string): string {
  return generateUtilityClass('MonorailFileUpload', slot)
}

export const fileUploadClasses: FileUploadClasses = generateUtilityClasses(
  'MonorailFileUpload',
  [
    'root',
    'statusDefault',
    'statusDropping',
    'statusProgress',
    'statusUploaded',
    'label',
    'dropTarget',
    'content',
    'icon',
    'onlyVisibleWhileDragging',
    'error',
    'disabled',
  ],
)
