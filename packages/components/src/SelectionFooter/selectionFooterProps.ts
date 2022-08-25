import type React from 'react'
import type { InternalStandardProps as StandardProps } from '@mui/material'

import type { SelectionFooterLocaleText } from './selectionFooterLocaleText.js'

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
