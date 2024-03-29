import React from 'react'
import { useTheme } from '@mui/material'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const QuestionTaskAddBlue = (props: SvgIconProps) => {
  const theme = useTheme()
  return (
    <SvgIcon {...props}>
      <circle cx="10" cy="10" r="8" fill={theme.palette.primary.main} />
      <path
        d="M22 19.5H22.5V19V17V16.5H22H19.5V14V13.5H19H17H16.5V14V16.5H14H13.5V17V19V19.5H14H16.5V22V22.5H17H19H19.5V22V19.5H22Z"
        fill="white"
        stroke="white"
      />
      <path
        d="M23 20.5H23.5V20V16V15.5H23H20.5V13V12.5H20H16H15.5V13V15.5H13H12.5V16V20V20.5H13H15.5V23V23.5H16H20H20.5V23V20.5H23ZM18.5 17V17.5H19H21.5V18.5H19H18.5V19V21.5H17.5V19V18.5H17H14.5V17.5H17H17.5V17V14.5H18.5V17Z"
        fill="white"
        stroke="white"
      />
      <path
        d="M9.16667 12.9167H10.4167V14.1667H9.16667V12.9167ZM10 5.83333C12.2292 5.92499 13.2 8.17499 11.875 9.86249C11.5292 10.2792 10.9708 10.5542 10.6958 10.9042C10.4167 11.25 10.4167 11.6667 10.4167 12.0833H9.16667C9.16667 11.3875 9.16667 10.8 9.44583 10.3833C9.72083 9.96666 10.2792 9.72083 10.625 9.44583C11.6333 8.5125 11.3833 7.19166 10 7.08333C9.66848 7.08333 9.35054 7.21502 9.11612 7.44944C8.8817 7.68387 8.75 8.00181 8.75 8.33333H7.5C7.5 7.67029 7.76339 7.0344 8.23223 6.56556C8.70107 6.09672 9.33696 5.83333 10 5.83333Z"
        fill="white"
      />
      <path
        d="M22 19H19V22H17V19H14V17H17V14H19V17H22V19Z"
        fill={theme.palette.primary.main}
      />
    </SvgIcon>
  )
}
