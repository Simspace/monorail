import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const ChevronDoubleRight: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.41 5.59L6 7L12 13L18 7L16.59 5.59L12 10.17L7.41 5.59ZM7.41 11.59L6 13L12 19L18 13L16.59 11.59L12 16.17L7.41 11.59Z" />
  </svg>
)
