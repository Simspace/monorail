import React, { ComponentType } from 'react'
import { CustomIconProps } from '@monorail/icon/Icon'

export const Filter: ComponentType<CustomIconProps> = props => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 4L0.75 0.25L11.25 0.250001L7.49999 4L7.5 7.75H4.5V4Z"
    />
  </svg>
)
