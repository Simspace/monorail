import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const Home: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.2 20V14.6667H13.8V20H18.3V12.8889H21L12 4L3 12.8889H5.7V20H10.2Z" />
    <path d="M14.7 4H16.5V9.33333H14.7V4Z" />
  </svg>
)
