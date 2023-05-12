import type { ChipProps } from '@mui/material'

export interface IconChipProps
  extends Omit<
    ChipProps,
    | 'avatar'
    | 'clickable'
    | 'deleteIcon'
    | 'icon'
    | 'label'
    | 'onDelete'
    | 'variant'
  > {
  /**
   * Icon element.
   */
  icon: React.ReactElement
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined'
}
