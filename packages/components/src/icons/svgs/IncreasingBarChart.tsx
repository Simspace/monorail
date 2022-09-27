import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const IncreasingBarChart = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 4H20V20H17V4ZM5 14H8V20H5V14ZM14 9H11V20H14V9Z"
    />
  </SvgIcon>
)
