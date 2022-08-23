import { StandardElementProps } from '@monorail/types'
import { SxProps, Theme } from '@mui/material'

import { ScrollShadowClasses } from './scrollShadowClasses.js'

export interface ScrollShadowProps extends StandardElementProps<'div'> {
  classes?: Partial<ScrollShadowClasses>
  /**
   * Should a shadow at the top of the container be displayed?
   *
   * @default true
   */
  top?: boolean
  /**
   * Should a shadow at the bottom of the container be displayed?
   *
   * @default false
   */
  bottom?: boolean
  children: React.ReactNode
  sx?: SxProps<Theme>
}
