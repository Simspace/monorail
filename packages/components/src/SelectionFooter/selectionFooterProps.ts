import React from 'react'
import { InternalStandardProps as StandardProps } from '@mui/material'

import { SelectionFooterLocaleText } from './selectionFooterLocaleText.js'

export interface SelectionFooterProps
  extends StandardProps<
    React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
  > {
  disableBorder?: boolean
  selectedCount: number
  shownCount: number
  totalCount: number
  localeText?: SelectionFooterLocaleText
}
