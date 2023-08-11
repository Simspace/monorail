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
  /** State class applied to the root element if status="error". */
  statusError: string
  /** Styles applied to the `FormLabel` component. */
  label: string
  /** Styles applied to `dropTarget`'s container element. */
  dropTarget: string
  /** Styles applied to `dropTarget`'s content wrapper element. */
  content: string
  /** Styles applied to the icon wrapper element. */
  icon: string
  action: string
  /** If `true`, the `dropTarget` element will only be visible while a file is being dragged into the viewport. */
  onlyVisibleWhileDragging: string
  /** State class applied to the root element if `isDragging={true}`. */
  isDragging: string
  /** State class applied to the root element if `disabled={true}`. */
  disabled: string
  /** Styles applied to the primary text element. */
  textPrimary: string
  /** Styles applied to the secondary text element. */
  textSecondary: string
  /** Styles applied to the file name's text element'. */
  fileName: string
  /** Styles applied to the file size's text element'. */
  fileSize: string
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
    'statusError',
    'label',
    'dropTarget',
    'content',
    'icon',
    'action',
    'onlyVisibleWhileDragging',
    'isDragging',
    'disabled',
    'textPrimary',
    'textSecondary',
    'fileName',
    'fileSize',
  ],
)
