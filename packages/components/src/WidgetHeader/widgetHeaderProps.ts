import type { Theme } from '@mui/material'
import type { SxProps } from '@mui/system'

import type { StandardElementProps } from '@monorail/types'

import type { TypographyProps } from '../Typography.js'
import type { WidgetHeaderClasses } from './widgetHeaderClasses.js'

export interface WidgetHeaderProps
  extends StandardElementProps<'div', 'title'> {
  classes?: Partial<WidgetHeaderClasses>
  title: React.ReactChild
  subtitle?: React.ReactChild
  children?: React.ReactChild | ReadonlyArray<React.ReactChild>
  slotProps?: {
    title?: Partial<TypographyProps>
    subtitle?: Partial<TypographyProps>
  }
  sx?: SxProps<Theme>
}
