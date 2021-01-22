import { HTMLProps } from 'react';
import { Link as RRLink, LinkProps as RRLinkProps } from 'react-router';
import * as MUI from '@material-ui/core';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
/**
 * Due to typing confusion, RRLinkProps needs to omit HTML props, since they exist already on MUI and cause issues.
 */
export declare type ReactRouterLinkProps = Omit<RRLinkProps, keyof HTMLProps<unknown>>;
/**
 * Create an empty styled-component that wraps RRLink and leverages defaultValidatorFn to only allow valid HTML attrs.
 * This is useful, since RRLink doesn't do this by default, and will pass along any custom props we or MUI have, causing
 * sadness. DS 2020-09-30
 *
 * Please try to avoid using this component directly.
 */
export declare const BaseRRLinkWithPropDenylist: import("styled-components").StyledComponent<RRLink, import("../../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const StyledLink: import("styled-components").StyledComponent<typeof Link, import("../../../helpers/theme").GlobalAppThemeInterface, {}, never>;
declare type LinkMonorailProps = ReactRouterLinkProps & {};
export declare type LinkProps = LinkMonorailProps & OmitBannedProps<MUI.LinkProps>;
/**
 * Internal link that leverages react-router `Link`.
 *
 * TODO: This should accept some kind of `external` prop and compose TBD `InternalLink` + `ExternalLink`
 */
export declare function Link(props: LinkProps): JSX.Element;
/**
 * Removes text styling, inherits font color
 */
export declare function LinkUnstyled(props: LinkProps): JSX.Element;
export {};
