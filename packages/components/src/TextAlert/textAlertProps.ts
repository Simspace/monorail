import type { AlertProps } from '@monorail/components'

export interface TextAlertProps
  extends Omit<AlertProps, 'iconMapping' | 'variant'> {
  /** If true, the left and right padding is removed. */
  disableGutters?: boolean
}
