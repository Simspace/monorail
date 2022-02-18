import React from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const Download = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M15 9H19L12 16L5 9H9V3H15V9ZM5 20V18H19V20H5Z"
      clipRule="evenodd"
    />
  </SvgIcon>
)
