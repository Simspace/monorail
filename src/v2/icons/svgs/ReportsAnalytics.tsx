import React from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const ReportsAnalytics = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 40 40" height="40" width="40">
    <rect
      x="4"
      y="4"
      width="32"
      height="32"
      rx="4"
      // SVG fill #ids relative to path if base url path is set https://stackoverflow.com/a/53579924
      fill={`url(${window.location.pathname}#reportsBackground)`}
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
