import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const InvertedInformation = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V11H13V17H11ZM11 7V9H13V7H11Z"
    />
  </SvgIcon>
)
