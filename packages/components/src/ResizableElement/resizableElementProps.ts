import type { StandardElementProps } from '@monorail/types'

import type { ResizableElementClasses } from './resizableElementClasses.js'

export interface ResizableElementProps extends StandardElementProps<'div'> {
  classes?: Partial<ResizableElementClasses>
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

  /** @internal */
  index?: number
}
