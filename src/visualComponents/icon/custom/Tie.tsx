import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const Tie: ComponentType<CustomIconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M6 2l4 4-3 11 5 5 5-5-3-11 4-4H6z"></path>
  </svg>
)
