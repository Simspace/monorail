import React from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const Square = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M4 4h16v16H4V4z"></path>
  </SvgIcon>
)
