import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const InformationTaskAddGrey: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" r="8" fill="black" fill-opacity="0.54" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 20H20V23H16V20H13V16H16V13H20V16H23V20ZM19 17V14H17V17H14V19H17V22H19V19H22V17H19Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 21H21V24H15V21H12V15H15V12H21V15H24V21ZM23 20V16H20V13H16V16H13V20H16V23H20V20H23ZM19 17H22V19H19V22H17V19H14V17H17V14H19V17Z"
      fill="white"
    />
    <path
      d="M22 19H19V22H17V19H14V17H17V14H19V17H22V19Z"
      fill="black"
      fill-opacity="0.54"
    />
    <path d="M9 14H11V9H9V14Z" fill="white" />
    <path d="M9 7H11V5H9V7Z" fill="white" />
  </svg>
)
