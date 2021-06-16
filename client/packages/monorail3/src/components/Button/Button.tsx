import React from 'react'
// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

export type ButtonProps<
  // `any` because that's how the MUI types are and tsc doesn't like unknown here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  D extends React.ElementType<any> = 'button',
  P = {}
> = MUI.ButtonProps<D, P>

// `any` because that's how the MUI types are and tsc doesn't like unknown here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = <D extends React.ElementType<any> = 'button', P = {}>(
  props: ButtonProps<D, P>,
) => {
  return <MUI.Button {...props} />
}
