import React, { ComponentType } from 'react'
import { CustomIconProps } from '@monorail/icon/Icon'

export const Certificate: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 3C2.89 3 2 3.89 2 5V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H12V22L15 19L18 22V17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V8V6V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3H16H4ZM12 5L15 7L18 5V8.5L21 10L18 11.5V15L15 13L12 15V11.5L9 10L12 8.5V5ZM4 5H9V7H4V5ZM4 9H7V11H4V9ZM4 13H9V15H4V13Z" />
  </svg>
)
