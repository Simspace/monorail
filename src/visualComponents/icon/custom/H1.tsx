import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const H1: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.3791 7V16H11.2647V12.31H7.11435V16H5V7H7.11435V10.5486H11.2647V7H13.3791Z" />
    <path d="M19.1429 7V16H17.0285V8.67143H15.2013V7H19.1429Z" />
  </svg>
)
