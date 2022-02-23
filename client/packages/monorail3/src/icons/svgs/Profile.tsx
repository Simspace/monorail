import React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export const Profile = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 16 20">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 0H16V20H0V0ZM8 2.5C8.96833 2.5 9.75 3.28167 9.75 4.25C9.75 5.21833 8.96833 6 8 6C7.03167 6 6.25 5.21833 6.25 4.25C6.25 3.28167 7.03167 2.5 8 2.5ZM4.5 8.90494C5.2525 10.0366 6.54167 10.7833 8 10.7833C9.45833 10.7833 10.7475 10.0366 11.5 8.90494C11.4825 7.74411 9.16083 7.10828 8 7.10828C6.83333 7.10828 4.5175 7.74411 4.5 8.90494ZM13 13V14.5H3V13H13ZM10 16H3V17.5H10V16Z"
    />
  </SvgIcon>
)
