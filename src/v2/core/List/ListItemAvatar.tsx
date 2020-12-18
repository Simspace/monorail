import React from 'react'
// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

import styled from '@monorail/helpers/styled-components'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

//#region CSS
export const StyledListItemAvatar = styled(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  MUI.ListItemAvatar as typeof ListItemAvatar, // as-cast necessary in order to allow for additional Monorail pass-through props
)``
//#endregion

export type ListItemAvatarProps = OmitBannedProps<MUI.ListItemAvatarProps>

/**
 * Icon actions within Lists
 * @link https://material-ui.com/components/lists/
 */
export const ListItemAvatar = React.forwardRef(
  (props: ListItemAvatarProps, ref) => {
    // TODO: `ref` prop caused TSC errors here due to MUI not passing an element attrs in its types somewhere..
    return <StyledListItemAvatar ref={ref as any} {...props} /> // eslint-disable-line
  },
)
;(ListItemAvatar as any).muiName = (MUI.ListItemAvatar as any).muiName // eslint-disable-line
