import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const Catalog = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 40 40" height="40" width="40">
    <rect
      x="4"
      y="4"
      width="32"
      height="32"
      rx="4"
      fill={`url(#catalogBackground)`}
    />
    <rect
      width="8.199"
      height="8.199"
      transform="scale(1.2483 .66466) rotate(45 -15.352 32.968)"
      fill="#fff"
    />
    <rect x="16.25" y="9.838" width="14.5" height="7.676" fill="#fff" />
    <rect x="23.5" y="9.838" width="7.25" height="11.515" fill="#A789F0" />
    <rect
      width="8.199"
      height="8.199"
      transform="scale(1.2483 .66466) rotate(45 -39.168 34.62)"
      fill="#fff"
    />
    <rect x="9" y="21.353" width="14.5" height="7.676" fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.5 21.353H16.25V32.6545H16.692L23.5 29.0295V21.353Z"
      fill="#A789F0"
    />
    <rect
      width="8.199"
      height="8.199"
      transform="scale(1.2483 .66466) rotate(45 -33.36 48.641)"
      fill="#fff"
    />
    <rect x="23.5" y="21.353" width="14.5" height="7.676" fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38 21.353H30.75V32.6545H31.192L38 29.0295V21.353Z"
      fill="#A789F0"
    />
    <path
      d="M23.5 6L30.7374 9.8536L23.5 13.7072L16.2625 9.8536L23.5 6Z"
      fill="#3104A1"
    />
    <path
      d="M16.25 17.5147L23.4874 21.3683L16.25 25.2219L9.01254 21.3683L16.25 17.5147Z"
      fill="#3104A1"
    />
    <path
      d="M30.75 17.5147L37.9874 21.3683L30.75 25.2219L23.5125 21.3683L30.75 17.5147Z"
      fill="#3104A1"
    />
    <defs>
      <linearGradient
        id="catalogBackground"
        x1="34.5"
        y1="4"
        x2="4"
        y2="36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7B52E1" />
        <stop offset="1" stopColor="#5022C4" />
      </linearGradient>
    </defs>
  </SvgIcon>
)
