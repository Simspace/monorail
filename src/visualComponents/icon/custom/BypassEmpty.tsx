import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'

export const BypassEmpty: ComponentType<CustomIconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M21.2929 7.29063L20.0001 8.58146V11.9899C20.0001 16.3937 16.4112 19.9765 12 19.9765H8.58575L6.29272 22.2655L7.70694 23.6773L9.41416 21.9732H12C17.5141 21.9732 22.0001 17.4947 22.0001 11.9899V9.40847L22.7073 8.70246L24.0001 9.99329V6H20.0001L21.2929 7.29063Z" />
    <path d="M12.0001 18.0001C15.3138 18.0001 18.0001 15.3138 18.0001 12C18.0001 8.68631 15.3138 6 12.0001 6C8.68632 6 6 8.68631 6 12C6 15.3138 8.68632 18.0001 12.0001 18.0001Z" />
  </svg>
)
