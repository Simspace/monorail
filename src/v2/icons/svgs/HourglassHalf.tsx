import React, { ComponentType } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const HourglassHalf = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zM8 4v3.5l4 4 4-4V4H8z"
      clipRule="evenodd"
    ></path>
    <path d="M15 5H9v2l3 3 3-3V5z"></path>
  </SvgIcon>
)
