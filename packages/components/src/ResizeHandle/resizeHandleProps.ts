import type { StandardElementProps } from '@monorail/types'

import type { ResizeHandleClasses } from './resizeHandleClasses.js'

export interface ResizeHandleProps extends StandardElementProps<'div'> {
  classes?: Partial<ResizeHandleClasses>

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
  computedSize?: number
}
