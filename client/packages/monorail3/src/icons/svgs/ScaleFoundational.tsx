import React from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const ScaleFoundational = (props: SvgIconProps) => (
  <SvgIcon
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="16" height="3" fill="#E0E0E0" />
    <rect y="4" width="16" height="3" fill="#E0E0E0" />
    <rect y="8" width="16" height="3" fill="#E0E0E0" />
    <rect y="12" width="16" height="3" fill="#007544" />
  </SvgIcon>
)
