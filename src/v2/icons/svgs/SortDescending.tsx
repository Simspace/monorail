import React, { ComponentType } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const SortDescending = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M10 13V11H18V13H10ZM10 19V17H14V19H10ZM10 7V5H22V7H10ZM6 17H8.5L5 20.5L1.5 17H4V4H6V17Z" />
  </SvgIcon>
)
