import React, { ComponentType } from 'react'
import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const AddGroup: ComponentType<CustomIconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 18c.69 0 1.36-.087 2-.252V15h3v-3h2.748A8 8 0 1010 18zM6.667 9.583V8.75h6.666v.833H6.667zm0 .834h4.166v.833H6.667v-.833zM19 19h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z"
      clipRule="evenodd"
    ></path>
  </svg>
)
