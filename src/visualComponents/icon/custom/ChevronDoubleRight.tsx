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
    <path d="M5.58997 7.41L6.99997 6L13 12L6.99997 18L5.58997 16.59L10.17 12L5.58997 7.41ZM11.59 7.41L13 6L19 12L13 18L11.59 16.59L16.17 12L11.59 7.41Z" />
  </svg>
)
