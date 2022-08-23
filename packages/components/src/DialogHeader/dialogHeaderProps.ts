import React from 'react'
import { StandardElementProps } from '@monorail/types'
import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'

import { TypographyProps } from '../Typography'
import { DialogHeaderClasses } from './dialogHeaderClasses'

export interface DialogHeaderProps
  extends StandardElementProps<'div', 'title'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<DialogHeaderClasses>
  /**
   * The title displayed in the header
   */
  title: React.ReactChild
  /**
   * The icon to the left of the title
   * @default undefined
   */
  icon?: React.ReactElement
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps?: {
    /**
     * Props applied to the Typography component
     * @default {}
     */
    typography?: TypographyProps
  }
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
}
