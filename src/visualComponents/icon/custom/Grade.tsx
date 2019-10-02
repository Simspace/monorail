import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const Grade: ComponentType<CustomIconProps> = props => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.92 5.284a.58.58 0 010 .823l-1.067 1.067-2.187-2.187 1.067-1.068a.58.58 0 01.823 0l1.365 1.365zM6.75 17.25v-2.188l6.452-6.451 2.187 2.187-6.451 6.452H6.75zM13 4c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
)
