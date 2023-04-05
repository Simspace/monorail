import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import SvgIcon from '@mui/material/SvgIcon'

export const Profile = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2H20V22H4V2ZM12 4.5C12.9683 4.5 13.75 5.28167 13.75 6.25C13.75 7.21833 12.9683 8 12 8C11.0317 8 10.25 7.21833 10.25 6.25C10.25 5.28167 11.0317 4.5 12 4.5ZM8.5 10.9049C9.2525 12.0366 10.5417 12.7833 12 12.7833C13.4583 12.7833 14.7475 12.0366 15.5 10.9049C15.4825 9.74411 13.1608 9.10828 12 9.10828C10.8333 9.10828 8.5175 9.74411 8.5 10.9049ZM17 15V16.5H7V15H17ZM14 18H7V19.5H14V18Z"
    />
  </SvgIcon>
)
