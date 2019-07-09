import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const CodeBlock: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="24" height="24" fill="none" />
    <rect
      x="2.75"
      y="2.75"
      width="18.5"
      height="18.5"
      rx="1.25"
      stroke="#adadad"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.96 12L10.18 15.0667L9.2 16L5 12L9.2 8L10.18 8.93333L6.96 12ZM17.04 12L13.82 15.0667L14.8 16L19 12L14.8 8L13.82 8.93333L17.04 12Z"
    />
  </svg>
)
