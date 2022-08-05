import React from 'react'
import { InternalStandardProps as StandardProps } from '@mui/material'

import { TypographyProps } from '../Typography'
import { DialogHeaderClasses } from './dialogHeaderClasses'

export interface DialogHeaderProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>,
    'title'
  > {
  classes?: Partial<DialogHeaderClasses>
  title: React.ReactChild
  icon?: React.ReactElement
  componentsProps?: {
    typography?: TypographyProps
  }
}
