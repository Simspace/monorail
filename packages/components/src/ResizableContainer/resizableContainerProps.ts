import type React from 'react'
import type { SxProps } from '@mui/material'
import type { Theme } from '@mui/system'

import type { StandardElementProps } from '@monorail/types'

import type { ResizableElementProps } from '../ResizableElement.js'
import type { ResizableHandleProps } from '../ResizableHandle.js'
import type { ResizableContainerClasses } from './resizableContainerClasses'

export type ResizableContainerOrientation = 'vertical' | 'horizontal'

export interface ResizableContainerProps
  extends Omit<StandardElementProps<'div'>, 'children'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ResizableContainerClasses>
  /**
   * The content of the component.
   */
  children: Array<
    | React.ReactElement<
        ResizableElementProps,
        React.JSXElementConstructor<ResizableElementProps>
      >
    | React.ReactElement<
        ResizableHandleProps,
        React.JSXElementConstructor<ResizableHandleProps>
      >
  >
  /**
   * Orientation in which descendent elements will be layed out
   * @default 'vertical'
   */
  orientation?: ResizableContainerOrientation
  /**
   * The maximum depth used to compute flex values
   * @default 100
   */
  maxDepth?: number
  /**
   * Should flex be recomputed when the window is resized?
   * @default false
   */
  windowResizeAware?: boolean

  sx?: SxProps<Theme>
}
