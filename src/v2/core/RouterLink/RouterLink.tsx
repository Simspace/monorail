import React, { HTMLProps } from 'react'
import { Link as RRLink, LinkProps as RRLinkProps } from 'react-router'
import * as MUI from '@material-ui/core'

import styled, { css } from '@monorail/helpers/styled-components'
import { Assert, Equals } from '@monorail/helpers/types'
import { Button, ButtonProps } from '@monorail/v2/core/Button/Button'
import { OmitBannedProps } from '@monorail/v2/shared/helpers'

// #region CSS
const routerLinkUnstyled = css`
  color: inherit;
  font-weight: 300;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: inherit;
  }
`
// #endregion CSS

/**
 * Due to typing confusion, RRLinkProps needs to omit HTML props, since they exist already on MUI and cause issues.
 */
export type ReactRouterLinkProps = Omit<RRLinkProps, keyof HTMLProps<unknown>>

const propAllowList = [
  'activeClassName',
  'activeStyle',
  'innerRef',
  'to',
  'onlyActiveOnIndex',
] as const

type RouterKeys = keyof ReactRouterLinkProps
type PropKeys = typeof propAllowList[number]
// If this fails, then make sure `propAllowList` has exactly the same keys as `ReactRouterLinkProps`
type __TEST = Assert<Equals<RouterKeys, PropKeys>>

/**
 * Create an empty styled-component that wraps RRLink and leverages defaultValidatorFn to only allow valid HTML attrs.
 * This is useful, since RRLink doesn't do this by default, and will pass along any custom props we or MUI have, causing
 * sadness. DS 2020-09-30
 *
 * Please try to avoid using this component directly.
 */
export const BaseRRLinkWithPropDenylist = styled(RRLink).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    propAllowList.includes(prop as keyof ReactRouterLinkProps) ||
    defaultValidatorFn(prop),
})``

export const StyledLink = styled(
  MUI.Link as typeof Link, // as-cast necessary in order to allow for additional Monorail pass-through props
)``

type LinkMonorailProps = ReactRouterLinkProps & {}
type LinkProps = LinkMonorailProps & OmitBannedProps<MUI.LinkProps>

/**
 * Internal link that leverages react-router `Link`.
 *
 * TODO: This should accept some kind of `external` prop and compose TBD `InternalLink` + `ExternalLink`
 */
export function Link(props: LinkProps) {
  const bannedPropsDefaults = {
    component: BaseRRLinkWithPropDenylist,
    underline: 'always',
  }

  return (
    <StyledLink
      {...bannedPropsDefaults} // spread as an escape hatch from BannedProps
      {...props}
    />
  )
}
;(Link as any).muiName = (MUI.Link as any).muiName // eslint-disable-line

/**
 * Removes text styling, inherits font color
 */
export function LinkUnstyled(props: LinkProps) {
  return <Link css={routerLinkUnstyled} {...props} />
}
;(LinkUnstyled as any).muiName = (MUI.Link as any).muiName // eslint-disable-line
