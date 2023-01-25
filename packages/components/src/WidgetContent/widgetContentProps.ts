import type { Theme } from '@mui/material'
import type { SxProps } from '@mui/system'

import type { StandardElementProps } from '@monorail/types'

import type { WidgetContentClasses } from './widgetContentClasses.js'

export interface WidgetContentProps extends StandardElementProps<'div'> {
  classes?: Partial<WidgetContentClasses>
  children?: React.ReactChild | ReadonlyArray<React.ReactChild>
  sx?: SxProps<Theme>
}
