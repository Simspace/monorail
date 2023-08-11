import type React from 'react'
import type { Theme } from '@mui/material'
import type { SxProps } from '@mui/system'

import type { StandardElementProps } from '@monorail/types'

import type { ResizeHandleClasses } from './resizeHandleClasses.js'

export interface ResizeHandleProps
  extends StandardElementProps<'div', 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  classes?: Partial<ResizeHandleClasses>
  isDragging: boolean
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
  /**
   * An event handler that will be called when a drag is started
   * @default undefined
   */
  onDragStart?: (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    source: 'mouse' | 'touch',
  ) => void

  orientation: 'vertical' | 'horizontal'

  sx?: SxProps<Theme>
}
