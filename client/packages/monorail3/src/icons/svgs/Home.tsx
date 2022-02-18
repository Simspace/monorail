import React from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const Home = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 40 40" height="40" width="40">
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H34.4C36.6091 0 38.4 1.79086 38.4 4V34.4C38.4 36.6091 36.6091 38.4 34.4 38.4H4C1.79086 38.4 0 36.6091 0 34.4V4Z"
      fill="url(#paint0_ss_v2_home_linear)"
    />
    <path d="M5 16.1046L16 6.5L27 15.4053V35H5V16.1046Z" fill="white" />
    <path d="M27 15.3887H41V35.0001H27V15.3887Z" fill="#A0C0FE" />
    <path d="M16 6.5L27 15.4065H41.0001L31 6.5H16Z" fill="#02218F" />
    <rect x="32" y="19.5986" width="3.6" height="5.04687" fill="#02218F" />
    <path d="M13 27H18V35H13V27Z" fill="#02218F" />
    <rect x="9" y="18" width="4" height="6" fill="#02218F" />
    <rect x="19" y="18" width="4" height="6" fill="#02218F" />
    <defs>
      <linearGradient
        id="paint0_ss_v2_home_linear"
        x1="38"
        y1="1"
        x2="0.500002"
        y2="37.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1B68F9" />
        <stop offset="1" stopColor="#1465FF" />
      </linearGradient>
    </defs>
  </SvgIcon>
)
