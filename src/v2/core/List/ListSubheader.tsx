import React from 'react'
import * as MUI from '@material-ui/core'

import styled from '@monorail/helpers/styled-components'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

//#region CSS
export const StyledListSubheader = styled(
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  MUI.ListSubheader as typeof ListSubheader, // as-cast necessary in order to allow for additional Monorail pass-through props
)``
//#endregion CSS

export type ListSubheaderProps = {
  /** When explicitly passed `null` we turn off heading level. `undefined` defaults to `3` */
  headingLevel?: number | null
} & OmitBannedProps<MUI.ListSubheaderProps>

/**
 * List Subheader
 * @link https://material-ui.com/components/lists/
 */
export const ListSubheader = React.forwardRef(
  (props: ListSubheaderProps, ref) => {
    const { children, headingLevel, ...restProps } = props

    const wrappedChildren =
      headingLevel !== null ? (
        <span role="heading" aria-level={headingLevel ?? 3}>
          {children}
        </span>
      ) : (
        <span>{children}</span>
      )

    return (
      <StyledListSubheader
        ref={ref}
        children={wrappedChildren}
        {...restProps}
      />
    )
  },
)
;(ListSubheader as any).muiName = (MUI.ListSubheader as any).muiName // eslint-disable-line
