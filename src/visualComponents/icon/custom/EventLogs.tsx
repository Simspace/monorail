import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const EventLogs: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 2V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H14V20H5V9H19V14H21V6C21 4.9 20.1 4 19 4H18V2H16Z"
      fill="#757575"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.9032 16.8775C22.0332 17.0075 22.0332 17.2175 21.9032 17.3475L21.2932 17.9575L20.0432 16.7075L20.6532 16.0975C20.7832 15.9675 20.9932 15.9675 21.1232 16.0975L21.9032 16.8775ZM16 22.0008V20.7508L19.6867 17.0642L20.9367 18.3142L17.25 22.0008H16Z"
      fill="#757575"
    />
    <path d="M7 11H17V12H7V11Z" fill="#757575" />
    <path d="M7 14H17V15H7V14Z" fill="#757575" />
    <path d="M7 17H15V18H7V17Z" fill="#757575" />
  </svg>
)
