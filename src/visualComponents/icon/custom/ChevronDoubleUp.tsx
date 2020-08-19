import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const ChevronDoubleUp: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M16.59 18.41L18 17L12 11L6 17L7.41 18.41L12 13.83L16.59 18.41ZM16.59 12.41L18 11L12 5L6 11L7.41 12.41L12 7.83L16.59 12.41Z" />
  </svg>
)
