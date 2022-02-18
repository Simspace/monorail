import React from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const Upload = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M15 10v6H9v-6H5l7-7 7 7h-4zm4 10v-2H5v2h14z"
      clipRule="evenodd"
    />
  </SvgIcon>
)
