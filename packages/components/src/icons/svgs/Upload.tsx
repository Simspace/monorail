import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const Upload = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M15 10v6H9v-6H5l7-7 7 7h-4zm4 10v-2H5v2h14z"
      clipRule="evenodd"
    />
  </SvgIcon>
)
