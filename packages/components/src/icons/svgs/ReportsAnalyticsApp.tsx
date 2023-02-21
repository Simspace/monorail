import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const ReportsAnalyticsApp = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 40 40" height="40" width="40">
    <rect
      x="4"
      y="4"
      width="32"
      height="32"
      rx="4"
      fill={`url(#reportsBackground)`}
    />
    <rect x="19" y="2" width="6" height="26" fill="#C32C07" />
    <rect x="11" y="10" width="6" height="18" fill="#C32C07" />
    <rect x="20" y="3" width="6" height="26" fill="#fff" />
    <rect x="27" y="18" width="6" height="10" fill="#D13711" />
    <rect x="12" y="11" width="6" height="18" fill="#fff" />
    <rect x="28" y="19" width="6" height="10" fill="#fff" />
    <defs>
      <linearGradient
        id="reportsBackground"
        x1="36"
        y1="4"
        x2="4"
        y2="36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FD5931" />
        <stop offset="1" stopColor="#DE2D02" />
      </linearGradient>
    </defs>
  </SvgIcon>
)
