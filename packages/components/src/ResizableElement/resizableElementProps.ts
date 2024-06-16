import type { ImperativePanelHandle, PanelProps } from 'react-resizable-panels'
import type { Theme } from '@mui/material'
import type { SxProps } from '@mui/system'

import type { ResizableElementClasses } from './resizableElementClasses.js'

export interface ResizableElementProps
  extends Omit<PanelProps, 'ref' | 'maxSize' | 'minSize' | 'defaultSize'> {
  id: string
  ref?: React.Ref<HTMLDivElement>
  apiRef?: React.Ref<ImperativePanelHandle>
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ResizableElementClasses>
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
   * @default '0%'
   */
  defaultSize?: string | number
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>
}
