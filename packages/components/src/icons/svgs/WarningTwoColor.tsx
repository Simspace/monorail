import React from 'react'
import type { SvgIconTypeMap } from '@mui/material'

import { SvgIcon } from '@monorail/components/SvgIcon'
import type { OverrideProps } from '@monorail/types'
import type { ColorProp } from '@monorail/utils'
import { useColorProp } from '@monorail/utils'

export interface WarningTwoColorExtraProps {
  secondaryColor?: ColorProp
}

export type WarningTwoColorProps<
  D extends React.ElementType = SvgIconTypeMap['defaultComponent'],
  P = {},
> = OverrideProps<SvgIconTypeMap<P & WarningTwoColorExtraProps, D>, D>

export const WarningTwoColor = (props: WarningTwoColorProps) => {
  const { secondaryColor: secondaryColorProp, ...others } = props
  const secondaryColor = useColorProp(
    secondaryColorProp,
    palette => palette.text.primary,
  )
  return (
    <SvgIcon {...others}>
      <path d="M1 21L12 2L23 21H1ZM11 18V16H13V18H11ZM11 10V14H13V10H11Z" />
      <path d="M11 14H13V10H11V14ZM11 18H13V16H11V18Z" fill={secondaryColor} />
    </SvgIcon>
  )
}
