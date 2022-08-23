import React from 'react'
import { StandardElementProps } from '@monorail/types'
import { DrawerProps, ModalProps, PaperProps, SxProps } from '@mui/material'
import { Theme } from '@mui/system'

import { ResizableDrawerClasses } from './resizableDrawerClasses.js'

export interface ResizableDrawerProps extends StandardElementProps<'div'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ResizableDrawerClasses>
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor?: DrawerProps['anchor']
  /**
   * The variant to use.
   * @default 'permanent'
   */
  variant?: DrawerProps['variant']
  /**
   * The initial size of the drawer, in pixels. This corresponds to width if anchor="left" or anchor="right",
   * or height if anchor="top" or anchor="bottom".
   * @default 240
   */
  initialSize?: number
  /**
   * The maximum size of the drawer, in pixels. This corresponds to width if anchor="left" or anchor="right",
   * or height if anchor="top" or anchor="bottom".
   * @default 600
   */
  maxSize?: number
  /**
   * The minimum size of the drawer, in pixels. This corresponds to width if anchor="left" or anchor="right",
   * or height if anchor="top" or anchor="bottom".
   * @default 60
   */
  minSize?: number
  /**
   * The size of the area around the resize handle that responds to user input, in pixels.
   * @default 12
   */
  dragAreaSize?: number
  /**
   * The size of the resize handle, in pixels.
   * @default 2
   */
  handleSize?: number

  componentsProps?: {
    drawer?: Omit<Partial<DrawerProps>, 'anchor' | 'variant' | 'sx'>
    paper?: Partial<PaperProps>
    modal?: Partial<ModalProps>
  }

  sx?: SxProps<Theme>
}
