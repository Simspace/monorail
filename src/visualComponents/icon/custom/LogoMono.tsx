import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const LogoMono: ComponentType<CustomIconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#757575"
      d="M12.031 12.016a5.278 5.278 0 01-5.276 5.277 5.276 5.276 0 1010.553 0 5.278 5.278 0 00-5.277-5.277z"
    ></path>
    <path
      fill="#757575"
      d="M12.031 1.46a5.277 5.277 0 00-5.276 5.279 5.276 5.276 0 005.276 5.277 5.276 5.276 0 015.277-5.277 5.278 5.278 0 00-5.277-5.28z"
    ></path>
    <path
      fill="#C2C2C2"
      d="M17.308 6.739a5.276 5.276 0 00-5.277 5.277 5.278 5.278 0 015.277 5.277 5.278 5.278 0 000-10.554z"
    ></path>
    <path
      fill="#C2C2C2"
      d="M6.755 6.739a5.277 5.277 0 100 10.554 5.278 5.278 0 005.276-5.277 5.276 5.276 0 01-5.276-5.277z"
    ></path>
  </svg>
)
