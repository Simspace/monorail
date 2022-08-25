import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const Square = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M4 4h16v16H4V4z"></path>
  </SvgIcon>
)
