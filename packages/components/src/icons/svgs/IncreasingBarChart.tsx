import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const IncreasingBarChart = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 12 12" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 2H10v8H8.5V2zm-6 5H4v3H2.5V7zM7 4.5H5.5V10H7V4.5z"
    />
  </SvgIcon>
)
