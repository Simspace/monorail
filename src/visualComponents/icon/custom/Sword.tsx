import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const Sword: ComponentType<CustomIconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M5.748 17.08V19l9-9-.94-1-8.06 8.08zm14.12-13.04l.84.84c.39.39.39 1.02 0 1.41l-3.12 3.12 2.66 2.68-1.41 1.41-1.42-1.42L8.498 21h-4.75v-4.75l8.92-8.92-1.42-1.42 1.41-1.41 2.67 2.67 3.12-3.12c.4-.4 1.03-.4 1.42-.01z"></path>
  </svg>
)
