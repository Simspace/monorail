import type React from 'react'
import type { Theme } from '@mui/material'
import type { SxProps } from '@mui/system'

import type { RequireKeysUnion, StandardElementProps } from '@monorail/types'

import type { IconButtonProps } from '../IconButton.js'
import type { TypographyProps } from '../Typography.js'
import type { DialogHeaderClasses } from './dialogHeaderClasses.js'

export interface DialogHeaderProps
  extends StandardElementProps<'div', 'title'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DialogHeaderClasses>
  /**
   * The title displayed in the header
   */
  title: React.ReactNode
  /**
   * The icon to the left of the title
   * @default undefined
   */
  icon?: React.ReactElement
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: {
    /**
     * Props applied to the Typography component
     * @default {}
     */
    typography?: Partial<TypographyProps>
    /**
     * Props applied to the IconButton component
     * @default {}
     */
    closeButton: RequireKeysUnion<
      Partial<IconButtonProps>,
      ['aria-label', 'aria-labelledby']
    >
  }
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
}
