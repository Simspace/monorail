import React, { ComponentType } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const StarHalf = (props: SvgIconProps) => {
  return (
    <SvgIcon width="24" height="24" viewBox="0 0 16 15" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1075 5.465L15.5 5.93L11.4125 9.4775L12.635 14.75L8 11.9525L3.365 14.75L4.595 9.4775L0.5 5.93L5.8925 5.4725L8 0.5L10.1075 5.465ZM8 3.575V10.55L10.8275 12.26L10.0775 9.05L12.5675 6.89L9.2825 6.605L8 3.575Z"
        fill="#000000"
      />
    </SvgIcon>
  )
}
