import React from 'react'
import * as MUI from '@material-ui/core'

export type ButtonGroupProps<
  D extends React.ElementType<any> = 'div',
  P = {}
> = MUI.ButtonGroupProps<D, P>

export const ButtonGroup = (props: ButtonGroupProps) => (
  <MUI.ButtonGroup {...props} />
)
