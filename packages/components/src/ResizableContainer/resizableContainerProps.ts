import type {
  ImperativePanelGroupHandle,
  PanelGroupProps,
} from 'react-resizable-panels'
import type { SxProps } from '@mui/material'
import type { Theme } from '@mui/system'

import type { ResizableContainerClasses } from './resizableContainerClasses'

export type ResizableContainerDirection = 'row' | 'column'

export interface ResizableContainerProps
  extends Omit<PanelGroupProps, 'ref' | 'direction'> {
  ref?: React.Ref<HTMLDivElement>
  apiRef?: React.Ref<ImperativePanelGroupHandle>

  direction: ResizableContainerDirection

  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ResizableContainerClasses>

  id: string

  sx?: SxProps<Theme>
}
