import {
  DrawerProps,
  InternalStandardProps as StandardProps,
  ModalProps,
  PaperProps,
} from '@mui/material'

import { ResizableDrawerClasses } from './resizableDrawerClasses'

export interface ResizableDrawerProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>> {
  classes?: Partial<ResizableDrawerClasses>
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
}
