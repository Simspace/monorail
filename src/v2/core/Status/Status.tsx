import React, { HTMLProps } from 'react'
import { Link as RRLink, LinkProps as RRLinkProps } from 'react-router'
// eslint-disable-next-line no-restricted-imports
import * as MUI from '@material-ui/core'

import styled, { css } from '@monorail/helpers/styled-components'
import { Assert, Equals } from '@monorail/helpers/types'
import { isNotNil } from '@monorail/sharedHelpers/typeGuards'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

// #region CSS
const StyledChip = styled(
  MUI.Chip as typeof Status, // as-cast necessary in order to allow for additional Monorail pass-through props
)
  // prevent passing Monorail props that are identically named as Material UI
  // .withConfig({
  //   shouldForwardProp: prop => prop !== 'size',
  // })
  // Provide defaults
  .attrs(props => ({
    // display: props.display ?? 'primary',
    // size: props.size ?? 'default',
  }))``

// #endregion CSS

export type StatusProps = {
  /* Require aria-label, since status without visual context makes no sense to screen readers. If using labelledby, provide null */
  'aria-label': string | null
} & Omit<
  OmitBannedProps<MUI.ChipProps>,
  // children not supported by MUI. Monorail does not support avatar.
  'children' | 'avatar' | 'aria-label'
>

/**
 * Badge-like display, usually for numerical display
 */
export function Status(props: StatusProps) {
  const { icon, ...restProps } = props

  const wrappedIcon = isNotNil(icon) ? (
    <span
      css={`
        display: inline-flex;
        font-size: 22px;
        color: inherit;
      `}
    >
      {icon}
    </span>
  ) : (
    undefined
  )

  return <StyledChip icon={wrappedIcon} {...restProps} />
}
;(Status as any).muiName = (MUI.Chip as any).muiName // eslint-disable-line
