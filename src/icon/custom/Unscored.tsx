import React, { ComponentType } from 'react'
import { CustomIconProps } from '@monorail/icon/Icon'

export const Unscored: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.92904 19.0711L19.0712 4.92893C15.1659 1.02369 8.83428 1.02369 4.92904 4.92893C1.02379 8.83418 1.02379 15.1658 4.92904 19.0711ZM20.4854 3.51472C25.1717 8.20101 25.1717 15.799 20.4854 20.4853C15.7991 25.1716 8.20111 25.1716 3.51482 20.4853C-1.17147 15.799 -1.17147 8.20101 3.51482 3.51472C8.20111 -1.17157 15.7991 -1.17157 20.4854 3.51472Z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="#fff" />
      </clipPath>
    </defs>
  </svg>
)
