import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const Grade = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5.08 6.107a.58.58 0 000-.823L15.717 6.92a.58.58 0 00-.823 0l-1.067 1.068 2.187 2.187 1.068-1.067zM6.75 15.063v2.187h2.188l6.451-6.452-2.187-2.187-6.452 6.451z"
      clipRule="evenodd"
    />
  </SvgIcon>
)
