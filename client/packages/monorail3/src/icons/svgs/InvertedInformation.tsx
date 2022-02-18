import React from 'react'
// eslint-disable-next-line no-restricted-imports
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export function InvertedInformation(props: SvgIconProps) {
  return (
    <SvgIcon width="10" height="10" viewBox="0 0 10 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM4.5 7.5V4.5H5.5V7.5H4.5ZM4.5 2.5V3.5H5.5V2.5H4.5Z"
      />
    </SvgIcon>
  )
}
