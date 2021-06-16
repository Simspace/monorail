import React from 'react'
// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

export type BoxProps<
  // `any` here b/c that's how the MUI types are setup, and tsc doesn't like using `unknown` here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  D extends React.ElementType<any> = 'div',
  P = {}
> = MUI.BoxProps<D, P>

// `any` here b/c that's how the MUI types are setup, and tsc doesn't like using `unknown` here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Box = <D extends React.ElementType<any> = 'div', P = {}>(
  props: BoxProps<D, P>,
) => <MUI.Box {...props} />
