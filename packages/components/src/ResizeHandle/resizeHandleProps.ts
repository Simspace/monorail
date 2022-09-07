import type { StandardElementProps } from '@monorail/types'

import type { ResizeHandleClasses } from './resizeHandleClasses.js'

export interface ResizeHandleProps extends StandardElementProps<'div'> {
  classes?: Partial<ResizeHandleClasses>

  /**
   * Should the handle have a "grip"?
   * @default true
   */
  grip?: boolean

  /**
   * Sets the position of the grip in relation to the line.
   * @default "center"
   */
  gripPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right'

  /**
   * Should flex values be propagated to neighboring ResizeElements?
   * @default false
   */
  propagate?: boolean

  /** @internal */
  index?: number
  /** @internal */
  flex?: number
  /** @internal */
  computedSize?: React.MutableRefObject<number>
}
