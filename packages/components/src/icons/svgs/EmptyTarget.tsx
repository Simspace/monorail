import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const EmptyTarget = (props: SvgIconProps) => {
  return (
    <SvgIcon width="56" height="56" viewBox="0 0 56 56" fill="none" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M28.105 47.2c10.764 0 19.49-8.725 19.49-19.488 0-10.764-8.726-19.49-19.49-19.49-10.763 0-19.489 8.726-19.489 19.49 0 10.763 8.726 19.489 19.49 19.489z"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M28.105 42.773c8.318 0 15.061-6.743 15.061-15.061 0-8.319-6.743-15.062-15.06-15.062-8.319 0-15.062 6.743-15.062 15.062 0 8.318 6.743 15.06 15.061 15.06zM37.033 24.624a9.444 9.444 0 11-3.03-4.289M33.453 27.712a5.347 5.347 0 11-2.5-4.527M28.105 27.712l23.322-15.894"
      ></path>
      <path
        fill="currentColor"
        d="M30.986 28.718h-4.462l1.084-4.156 3.378 4.156z"
      ></path>
    </SvgIcon>
  )
}
