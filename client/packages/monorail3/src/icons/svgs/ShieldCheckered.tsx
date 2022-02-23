import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const ShieldCheckered = (props: SvgIconProps) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5L12 1L21 5V11C21 16.55 17.16 21.74 12 23C6.84 21.74 3 16.55 3 11V5ZM19 11.99H12V3.19L5 6.3V12H12V20.93C15.72 19.78 18.47 16.11 19 11.99Z"
    />
  </SvgIcon>
)
