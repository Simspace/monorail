import React from 'react'
import { useTheme } from '@mui/material'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const EssayAnswered = (props: SvgIconProps) => {
  const theme = useTheme()
  return (
    <SvgIcon {...props}>
      <g fill={theme.palette.common.white} clipPath="url(#essayAnsweredClip0)">
        <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6zm0 2h7v5h5v11H6V4zm2 8v2h8v-2H8zm0 4v2h5v-2H8z"></path>
        <path
          stroke={theme.palette.primary.shades[700]}
          strokeWidth="2"
          d="M24.406 16.223l.731-.715-.73-.715-1.522-1.488-.7-.684-.698.683-5.824 5.69-1.869-1.828-.696-.68-.7.678-1.53 1.486-.736.715.734.717 4.097 4.007.7.683.699-.683 8.044-7.866z"
        ></path>
      </g>
      <defs>
        <clipPath id="essayAnsweredClip0">
          <path fill={theme.palette.common.white} d="M0 0h24v24H0V0z"></path>
        </clipPath>
      </defs>
    </SvgIcon>
  )
}
