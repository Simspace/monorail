import React from 'react'
import * as MUI from '@material-ui/core'

import styled from '@monorail/helpers/styled-components'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

//#region CSS
export const StyledListItemSecondaryAction = styled(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  MUI.ListItemSecondaryAction as typeof ListItemSecondaryAction, // as-cast necessary in order to allow for additional Monorail pass-through props
)`
  font-size: 16px;
`
//#endregion

export type ListItemSecondaryActionProps = OmitBannedProps<
  MUI.ListItemSecondaryActionProps
>

/**
 * Secondary actions within Lists. These are not given any color treatment, since they usually contain buttons.
 *
 * @link https://material-ui.com/components/lists/
 */
export const ListItemSecondaryAction = React.forwardRef(
  (props: ListItemSecondaryActionProps, ref) => {
    return <StyledListItemSecondaryAction ref={ref} {...props} />
  },
)
;(ListItemSecondaryAction as any).muiName = (MUI.ListItemSecondaryAction as any).muiName // eslint-disable-line
