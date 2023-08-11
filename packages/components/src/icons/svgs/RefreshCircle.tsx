import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon' // eslint-disable-line no-restricted-imports

export const RefreshCircle = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6.66667C13.4733 6.66667 14.8 7.26667 15.7667 8.23333L17.3333 6.66667V11.3333H12.6667L14.8133 9.18667C14.0933 8.46 13.1067 8 12 8C9.79333 8 8 9.79333 8 12C8 14.2067 9.79333 16 12 16C13.74 16 15.22 14.8867 15.7667 13.3333H17.1533C16.56 15.6333 14.4867 17.3333 12 17.3333C9.05333 17.3333 6.67333 14.9467 6.67333 12C6.67333 9.05333 9.05333 6.66667 12 6.66667Z"
      fill="white"
    />
  </SvgIcon>
)
