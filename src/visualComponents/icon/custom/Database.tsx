import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const Database: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 4C8.133 4 5 5.591 5 7.556c0 1.964 3.133 3.555 7 3.555s7-1.591 7-3.555C19 5.59 15.867 4 12 4zM5 9.333V12c0 1.964 3.133 3.556 7 3.556s7-1.592 7-3.556V9.333c0 1.965-3.133 3.556-7 3.556s-7-1.591-7-3.556zm0 4.445v2.666C5 18.41 8.133 20 12 20s7-1.591 7-3.556v-2.666c0 1.964-3.133 3.555-7 3.555s-7-1.59-7-3.555z" />
  </svg>
)
