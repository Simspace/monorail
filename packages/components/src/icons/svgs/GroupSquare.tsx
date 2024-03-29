import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const GroupSquare = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M5 2a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5zm8.042 6.57a1.944 1.944 0 10-2.75 2.75 1.944 1.944 0 002.75-2.75zM8.628 9.622a1.667 1.667 0 10.628 2.2 3.075 3.075 0 01-.628-2.2zm8.106.255a1.667 1.667 0 00-2.028-.255 3.075 3.075 0 01-.628 2.2 1.665 1.665 0 102.656-1.945zM11.667 13c-1.995 0-3.611.933-3.611 2.083v.973h7.222v-.973c0-1.15-1.617-2.083-3.611-2.083zM5 15.222v.834h1.944v-.973c0-.572.2-1.094.528-1.472C6.05 13.8 5 14.45 5 15.222zm11.389.834h1.944v-.834c0-.772-1.05-1.422-2.472-1.61.328.377.528.9.528 1.471v.973z"
      clipRule="evenodd"
    ></path>
  </SvgIcon>
)
