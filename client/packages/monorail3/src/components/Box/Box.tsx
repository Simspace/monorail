import React from 'react'
// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

export type BoxProps<
  D extends React.ElementType<unknown> = 'div',
  P = {}
> = MUI.BoxProps<D, P>

export const Box = <D extends React.ElementType<unknown> = 'div', P = {}>(
  props: BoxProps<D, P>,
) => <MUI.Box {...props} />

/* eslint-disable no-restricted-imports */
//export { default } from '@material-ui/core/Box'
//export * from '@material-ui/core/Box'
