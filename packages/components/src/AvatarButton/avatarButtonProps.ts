import type { SxProps } from '@mui/material'

import type { AvatarProps } from '@monorail/components'

export interface AvatarButtonProps extends Omit<AvatarProps, 'color' | 'size'> {
  /**
   * The content of the Avatar
   */
  children?: React.ReactNode
  /** The color of the component.
   * @default 'secondary'
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  /** If true, the component is disabled. */
  disabled?: boolean
  /** The size of the component.
   * @default 'medium'
   */
  size?: 'small' | 'medium'
  /** The system prop that allows defining system overrides as well as additional CSS styles. */
  sx?: SxProps
}
