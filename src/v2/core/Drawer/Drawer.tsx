import React from 'react'
import * as MUI from '@material-ui/core'

import { OmitBannedProps } from '@monorail/v2/shared/helpers'

export type DrawerProps = OmitBannedProps<MUI.DrawerProps>

export function Drawer(props: DrawerProps) {
  return <MUI.Drawer role="dialog" {...props} />
}
;(Drawer as any).muiName = (MUI.Drawer as any).muiName // eslint-disable-line
