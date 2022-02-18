import React from 'react'
// eslint-disable-next-line no-restricted-imports
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const TrashCanWithCheck = (props: SvgIconProps) => (
  <SvgIcon width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM16 12.3448L14.6552 11L10.849 14.8026L9.35153 13.3051L8 14.6471L10.8488 17.496L16 12.3448Z"
      fill="#757575"
    />
  </SvgIcon>
)
