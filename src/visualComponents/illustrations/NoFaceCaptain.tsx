import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const NoFaceCaptain: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9968 2.00001C7.87449 1.99563 3.82122 3.1455 2 5.23914L4.30937 7.30731V8.70187H19.6906V7.30731L22 5.23914C19.8023 3.02537 15.8689 2.0045 11.9968 2.00001ZM8.26978 4.13659L11.1791 4.78563C11.2989 4.40936 11.541 4.19797 11.9329 4.18482H12.0665C12.4584 4.19797 12.7005 4.41023 12.8203 4.78563L15.7296 4.13659V5.02682L11.9984 6.56524L8.26894 5.02682V4.13659H8.26978ZM4.30697 9.52007H19.6923V11.4444H4.30697V9.52007ZM19.7778 14.2223C19.7778 18.5178 16.2956 22 12 22C7.70447 22 4.22224 18.5178 4.22224 14.2223C4.22224 13.45 4.33477 12.7041 4.54432 12H19.4557C19.6652 12.7041 19.7778 13.45 19.7778 14.2223Z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" transform="translate(2 2)" />
      </clipPath>
    </defs>
  </svg>
)
