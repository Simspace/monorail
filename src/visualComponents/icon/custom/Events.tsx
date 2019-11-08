import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const Events: ComponentType<CustomIconProps> = props => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="4"
      y="5"
      width="32"
      height="30"
      rx="4"
      // SVG fill #ids relative to path if base url path is set https://stackoverflow.com/a/53579924
      fill={`url(${window.location.pathname}#eventsBackground)`}
    />
    <path d="M38 29H11V11H38V29Z" fill="#65DC7E" />
    <path
      d="M23.8347 35V23.6537H18L26.3832 6V17.3463H32L23.8347 35Z"
      fill="#56AC68"
    />
    <path
      d="M24.8347 34V23.045H19L27.3832 6V16.955H33L24.8347 34Z"
      fill="#fff"
    />
    <rect
      x="29"
      y="2"
      width="4"
      height="5"
      rx="1"
      transform="rotate(90 29 2)"
      fill="#65DC7E"
    />
    <rect
      x="15"
      y="2"
      width="4"
      height="5"
      rx="1"
      transform="rotate(90 15 2)"
      fill="#65DC7E"
    />
    <defs>
      <linearGradient
        id="eventsBackground"
        x1="36"
        y1="5"
        x2="4"
        y2="35"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3EA553" />
        <stop offset="1" stopColor="#2A6F38" />
      </linearGradient>
    </defs>
  </svg>
)
