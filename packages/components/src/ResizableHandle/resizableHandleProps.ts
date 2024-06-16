import type React from 'react'
import type { PanelResizeHandleProps } from 'react-resizable-panels'
import type { Theme } from '@mui/material'
import type { SxProps } from '@mui/system'

export interface ResizableHandleProps
  extends Omit<PanelResizeHandleProps, 'onDrag' | 'onDragEnd' | 'onDragStart'> {
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
   * An event handler that will be called when a drag is started
   * @default undefined
   */
  onDragStart?: (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => void
  /**
   * An event handler that will be called each time a MouseMove or TouchMove event is fired while dragging
   * @default undefined
   */
  onDrag?: (event: MouseEvent | TouchEvent) => void
  /**
   * An event handler that will be called when a drag is finished
   * @default undefined
   */
  onDragEnd?: (event: MouseEvent | TouchEvent) => void

  sx?: SxProps<Theme>
}
