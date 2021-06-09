import React from 'react'
// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

export type ButtonProps<
  D extends React.ElementType<unknown> = 'button',
  P = {}
> = MUI.ButtonProps<D, P>

export const Button = <D extends React.ElementType<unknown> = 'button', P = {}>(
  props: ButtonProps<D, P>,
) => {
  return <MUI.Button {...props} />
}
