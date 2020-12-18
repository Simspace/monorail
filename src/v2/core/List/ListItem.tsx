import React from 'react'
import * as MUI from '@material-ui/core'

import styled from '@monorail/helpers/styled-components'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

//#region CSS

export const StyledListItem = styled(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  MUI.ListItem as typeof ListItem, // as-cast necessary in order to allow for additional Monorail pass-through props
)``
//#endregion CSS

export const UnstyledListItem = (props: ListItemProps) => {
  return (
    <ListItem
      css={`
        min-height: unset;
        padding: 0;
        margin: 0;
        width: inherit;
      `}
      disableGutters
      {...props}
    />
  )
}
;(UnstyledListItem as any).muiName = (MUI.ListItem as any).muiName // eslint-disable-line

export type ListItemProps = OmitBannedProps<MUI.ListItemProps>

/**
 * Items within Lists
 * @link https://material-ui.com/components/lists/
 */
export const ListItem = React.forwardRef((props: ListItemProps, ref) => {
  const { ...restProps } = props

  return (
    <li
      // Add relative position for when we use SecondaryAction or text-overflow ellipse
      css={`
        position: relative;
      `}
    >
      <StyledListItem
        // Use a div (instead of li) for secondaryAction container since we always wrap with <li>
        ContainerComponent="div"
        ref={ref}
        {...restProps}
      />
    </li>
  )
})
;(ListItem as any).muiName = (MUI.ListItem as any).muiName // eslint-disable-line
