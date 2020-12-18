import React, { ComponentType } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const CheckStar = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M14.33 3.307L12 0 9.67 3.307 6 1.607l-.364 4.029L1.608 6l1.699 3.67L0 12l3.307 2.33-1.7 3.67 4.029.364L6 22.392l3.67-1.699L12 24l2.33-3.307 3.67 1.7.364-4.029L22.392 18l-1.699-3.67L24 12l-3.307-2.33 1.7-3.67-4.029-.364L18 1.608l-3.67 1.699zM5 12l5 5 9-9-1.41-1.42L10 14.17l-3.59-3.58L5 12z"
      clipRule="evenodd"
    ></path>
  </SvgIcon>
)
