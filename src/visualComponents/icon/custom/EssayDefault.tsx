import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const EssayDefault: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 12h8v2H8v-2zm2 8H6V4h7v5h5v3.1l2-2V8l-6-6H6a2 2 0 00-2 2v16a2 2 0 002 2h4v-2zm-2-2h4.1l.9-.9V16H8v2zm12.2-5c.1 0 .3.1.4.2l1.3 1.3c.2.2.2.6 0 .8l-1 1-2.1-2.1 1-1c.1-.1.2-.2.4-.2zm0 3.9L14.1 23H12v-2.1l6.1-6.1 2.1 2.1z"></path>
  </svg>
)
