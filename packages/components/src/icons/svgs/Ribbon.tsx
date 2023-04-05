import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const Ribbon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 5V16L14 13.5L17 14.5V23L10 20L3 23V7C3 5.9 3.9 5 5 5H5.5Z"
    />
    <path d="M19 2H9C7.9 2 7 2.6 7 3.33333V14L14 12L21 14V3.33333C21 2.6 20.1 2 19 2Z" />
  </SvgIcon>
)
