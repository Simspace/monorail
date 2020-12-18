import React, { ComponentType } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const SortAscending = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M10 11V13H18V11H10ZM10 5V7H14V5H10ZM10 17V19H22V17H10ZM6 7H8.5L5 3.5L1.5 7H4V20H6V7Z" />
  </SvgIcon>
)
