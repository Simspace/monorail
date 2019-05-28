import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/icon/Icon'

export const SortDescending: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 13V11H18V13H10ZM10 19V17H14V19H10ZM10 7V5H22V7H10ZM6 17H8.5L5 20.5L1.5 17H4V4H6V17Z" />
  </svg>
)
