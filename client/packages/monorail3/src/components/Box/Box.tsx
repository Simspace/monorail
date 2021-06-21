import React from 'react'
// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

export type BoxProps<
  D extends React.ElementType<any> = 'div',
  P = {}
> = MUI.BoxProps<D, P>

export const Box = <D extends React.ElementType<any> = 'div', P = {}>(
  props: BoxProps<D, P>,
) => <MUI.Box {...props} />
