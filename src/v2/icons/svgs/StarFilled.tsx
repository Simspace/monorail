import React, { ComponentType } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const StarFilled = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="24"
      height="24"
      id="star-filled"
      viewBox="0 0 14 13"
      {...props}
    >
      <path d="M6.66667 10.18L10.7867 12.6667L9.69333 7.98L13.3333 4.82667L8.54 4.42L6.66667 0L4.79333 4.42L0 4.82667L3.64 7.98L2.54667 12.6667L6.66667 10.18Z" />
    </SvgIcon>
  )
}
