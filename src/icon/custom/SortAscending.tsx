import React, { ComponentType } from 'react'
import { CustomIconProps } from '@monorail/icon/Icon'

export const SortAscending: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10 11V13H18V11H10ZM10 5V7H14V5H10ZM10 17V19H22V17H10ZM6 7H8.5L5 3.5L1.5 7H4V20H6V7Z" />
  </svg>
)
