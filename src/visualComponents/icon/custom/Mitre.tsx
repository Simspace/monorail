import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const Mitre: ComponentType<CustomIconProps> = props => (
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
      clipRule="evenodd"
      d="M2 19.2683L4.88395 3H8.14445L11.9685 13.1757L15.9811 3.06304H19.053L22 19.2053H18.8025L17.0467 9.09263L13.2232 19.0173L10.9029 19.0168L7.07827 9.03012L5.135 19.2053L2 19.2683Z"
    />
  </svg>
)
