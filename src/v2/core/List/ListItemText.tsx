import React from 'react'
import * as MUI from '@material-ui/core'

import { Text } from '@monorail/exports'
import styled from '@monorail/helpers/styled-components'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'
import { TextProps } from '@monorail/visualComponents/exports'

//#region CSS
export const StyledListItemText = styled(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  MUI.ListItemText as typeof ListItemText, // as-cast necessary in order to allow for additional Monorail pass-through props
)``
//#endregion CSS

export type ListItemTextProps = Omit<
  OmitBannedProps<MUI.ListItemTextProps>,
  // Since we use a custom typography component, ban these and supply our own
  'primaryTypographyProps' | 'secondaryTypographyProps'
> & {
  primaryTextProps?: Partial<TextProps>
  secondaryTextProps?: Partial<TextProps>
}

/**
 * Text within Lists
 * @link https://material-ui.com/components/lists/
 */
export const ListItemText = React.forwardRef(
  (props: ListItemTextProps, ref) => {
    const {
      primaryTextProps,
      secondaryTextProps,
      primary,
      secondary,
      ...restProps
    } = props

    const primaryWrapped = isNotNil(primary) ? (
      <Text {...primaryTextProps}>{primary}</Text>
    ) : (
      primary
    )
    const secondaryWrapped = isNotNil(secondary) ? (
      <Text {...secondaryTextProps}>{secondary}</Text>
    ) : (
      secondary
    )

    return (
      <StyledListItemText
        ref={ref}
        disableTypography // Turn off MUI typography to use our own
        primary={primaryWrapped}
        secondary={secondaryWrapped}
        {...restProps}
      />
    )
  },
)
;(ListItemText as any).muiName = (MUI.ListItemText as any).muiName // eslint-disable-line
