import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const Information: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M13.5 19.5h-3v-9h3v9zM13.5 7.5h-3v-3h3v3z" />
  </svg>
)
