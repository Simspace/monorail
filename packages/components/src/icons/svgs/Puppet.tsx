import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const Puppet = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 23L5 16H10.5L13 13.5L13 10.5L10.5 8L5 8V1L12 1L12 6.5L14.5 9.00001H19L19 15H14.5L12 17.5L12 23H5ZM7 21H10V18H7V21ZM10 6L7 6V3L10 3V6Z"
    />
  </SvgIcon>
)
