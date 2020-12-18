import React, { ComponentType } from 'react'
// eslint-disable-next-line no-restricted-imports
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export const FileTree = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />
  </SvgIcon>
)
