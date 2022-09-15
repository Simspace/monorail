import type { Theme } from '@mui/material'
import type { SxProps } from '@mui/system'

import type { StandardElementProps } from '@monorail/types'

import type { ResizableElementClasses } from './resizableElementClasses.js'

export interface ResizableElementProps extends StandardElementProps<'div'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ResizableElementClasses>
  /**
   * The content of the ResizableElement
   */
  children?: React.ReactElement | Array<React.ReactElement>
  /**
   * The maximum size of the container, in pixels, decimal, or percentage of parent container.
   * @default '100%'
   */
  maxSize?: string | number
  /**
   * The minimum size of the container, in pixels, decimal, or percentage of parent container.
   * @default '0%'
   */
  minSize?: string | number
  /**
   * The minimum size of the container, in pixels, decimal, or percentage of parent container.
   * @default '1'
   */
  size?: string | number
  /**
   * The initial flex size of the container
   * @default undefined
   */
  flex?: number
  /**
   * The direction that the element should stretch or shrink when `size` is changed
   * @default 1
   */
  direction?: 1 | -1
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>

  /** @internal */
  index?: number
}
