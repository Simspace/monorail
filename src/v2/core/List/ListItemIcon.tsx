import React from 'react'
import * as MUI from '@material-ui/core'

import styled from '@monorail/helpers/styled-components'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

//#region CSS
export const StyledListItemIcon = styled(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  MUI.ListItemIcon as typeof ListItemIcon, // as-cast necessary in order to allow for additional Monorail pass-through props
)`
  font-size: 16px;
`
//#endregion
export type ListItemIconProps = OmitBannedProps<MUI.ListItemIconProps>

/**
 * Icon actions within Lists
 * @link https://material-ui.com/components/lists/
 */
export const ListItemIcon = React.forwardRef(
  (props: ListItemIconProps, ref) => {
    return <StyledListItemIcon ref={ref} {...props} />
  },
)
;(ListItemIcon as any).muiName = (MUI.ListItemIcon as any).muiName // eslint-disable-line
