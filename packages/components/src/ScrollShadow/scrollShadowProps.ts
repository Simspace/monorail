import type React from 'react'
import type { SxProps, Theme } from '@mui/material'

import type { StandardElementProps } from '@monorail/types'

import type { ScrollShadowClasses } from './scrollShadowClasses.js'

export interface ScrollShadowProps<D extends React.ElementType = 'div'>
  extends StandardElementProps<'div'> {
  scrollerRef?:
    | React.RefCallback<HTMLDivElement>
    | React.MutableRefObject<HTMLDivElement | null>
  /**
   * The content of the component.
   */
  children: React.ReactNode
  /**
   * Override or extend the styles applied to the component.
   */
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
  slots?: {
    scrollContainer?: D
  }
  slotProps?: {
    scrollContainer?: Partial<React.ComponentProps<D>>
  }
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
}
