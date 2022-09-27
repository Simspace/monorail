import React from 'react'
import { useTheme } from '@mui/material'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const LogoMono = (props: SvgIconProps) => {
  const theme = useTheme()
  return (
    <SvgIcon {...props}>
      <path
        fill={theme.palette.default.shades[600]}
        d="M12.031 12.016a5.278 5.278 0 01-5.276 5.277 5.276 5.276 0 1010.553 0 5.278 5.278 0 00-5.277-5.277z"
      ></path>
      <path
        fill={theme.palette.default.shades[600]}
        d="M12.031 1.46a5.277 5.277 0 00-5.276 5.279 5.276 5.276 0 005.276 5.277 5.276 5.276 0 015.277-5.277 5.278 5.278 0 00-5.277-5.28z"
      ></path>
      <path
        fill={theme.palette.default.shades[300]}
        d="M17.308 6.739a5.276 5.276 0 00-5.277 5.277 5.278 5.278 0 015.277 5.277 5.278 5.278 0 000-10.554z"
      ></path>
      <path
        fill={theme.palette.default.shades[300]}
        d="M6.755 6.739a5.277 5.277 0 100 10.554 5.278 5.278 0 005.276-5.277 5.276 5.276 0 01-5.276-5.277z"
      ></path>
    </SvgIcon>
  )
}
