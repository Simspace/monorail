import React, {
  Children,
  CSSProperties,
  MouseEvent,
  ReactNode,
  StatelessComponent,
} from 'react'

import styled, { css, SimpleInterpolation } from 'styled-components'

import {
  baseFocusStyles,
  buttonTransition,
  Colors,
  getColor,
  ellipsis,
  flexFlow,
  FontSizes,
  Sizes,
  typography,
} from '@monorail/helpers/exports'
import { Icon, IconProps } from '@monorail/icon/Icon'
import { CommonComponentType } from '@monorail/types'
import { isNil } from '@monorail/sharedHelpers/typeGuards'

/*
*
* List Container
*
*/

/*
* Styles
*/

const BBListContainer = styled.div<BBListContainerProps>(
  ({ cssOverrides }) => css`
    ${flexFlow()};

    overflow-y: auto;
    padding: 8px 0;

    ${cssOverrides};
  `,
)

/*
* Types
*/

type BBListContainerProps = {
  cssOverrides?: SimpleInterpolation
}

type ListContainerProps = BBListContainerProps & {
  emptyText?: string
}

/*
* Component
*/

export const ListContainer: StatelessComponent<ListContainerProps> = ({
  children,
  cssOverrides,
  emptyText = "I'm empty :(",
}) => (
  <BBListContainer cssOverrides={cssOverrides}>
    {Children.count(children) > 0 ? (
      children
    ) : (
      <ListItem
        cssOverrides={css`
          color: ${getColor(Colors.Black54)};
        `}
      >
        {emptyText}
      </ListItem>
    )}
  </BBListContainer>
)

/*
*
* List Item
*
*/

/*
* Types
*/

export type LinkProps = {
  activeClassName?: string
  activeStyle?: CSSProperties
  onlyActiveOnIndex?: boolean
  to?: string
}

type ListSizeProps = {
  dense?: boolean
}

type ListItemProps = LinkProps &
  ListSizeProps &
  CommonComponentType & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
    size?: Sizes
    disabled?: boolean
  }

/*
* Styles
*/

export const ListItemText = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    /* This is row wrap instead of column nowrap because IE11 doesn't give the item height when it is a column. */
    ${flexFlow('row', 'wrap')};

    overflow: hidden;
    width: 100%;

    ${cssOverrides};
  `,
)

export const ListItemPrimaryText = styled.span<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${typography(500, FontSizes.Title5, 'auto 6px')};
    ${ellipsis};

    color: currentColor;
    flex: 1 1 100%;

    ${cssOverrides};
  `,
)

export const ListItemSecondaryText = styled.span<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${typography(500, FontSizes.Content, 'auto 6px')};
    ${ellipsis};

    color: ${getColor(Colors.Black62)};
    flex: 1 1 100%;

    ${cssOverrides};
  `,
)

type BBListSizeIconProps = ListSizeProps & { icon: string }

export const ListItemGraphic = styled(({ dense, ...otherProps }) => (
  <Icon {...otherProps} />
))<BBListSizeIconProps & IconProps>(
  ({ dense, cssOverrides }) => css`
    margin: auto ${dense ? 4 : 6}px;

    ${buttonTransition};

    ${cssOverrides};
  `,
)

export const ListItem = styled(
  ({ cssOverrides, children, activeClassName, ...otherProps }) => (
    <div {...otherProps}>{children}</div>
  ),
)<ListItemProps>(
  ({ as, cssOverrides, dense, disabled, onClick, size = Sizes.DP24 }) => css`
    ${!isNil(onClick) || !isNil(as)
      ? css`
          background: transparent;
          color: ${getColor(Colors.BrandDarkBlue)};
          cursor: pointer;
          text-transform: none; /* IE 11 */
          user-select: none;

          ${buttonTransition};

          &:hover,
          &.is-active {
            background: hsla(225, 6%, 13%, 0.06);
          }

          &:active {
            background: #e0eafd;
            opacity: 1;
          }

          /* stylelint-disable selector-type-no-unknown */
          &.is-active,
          &:active,
          &:active ${ListItemGraphic}, &.is-active ${ListItemGraphic} {
            color: ${getColor(Colors.BrandLightBlue)};
          }
          /* stylelint-enable selector-type-no-unknown */

          ${baseFocusStyles()};
        `
      : css`
          color: ${getColor(Colors.Black89)};
          background: transparent;
        `};
    ${disabled &&
      css`
        opacity: 0.54;
        pointer-events: none;
      `};

    ${flexFlow('row')};

    align-items: center;
    box-sizing: border-box;
    color: ${getColor(Colors.Black89)};
    flex-shrink: 0;
    min-height: ${size}px;
    padding: 0 ${dense ? 4 : 10}px;
    position: relative;
    text-transform: initial;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
    }

    ${cssOverrides};
  `,
)

ListItem.defaultProps = {
  activeClassName: 'is-active',
}

export type SimpleListItemProps = CommonComponentType &
  LinkProps & {
    dense?: boolean
    disabled?: boolean
    leftIcon?: string
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
    primaryText?: ReactNode
    rightIcon?: string
    secondaryText?: ReactNode
    size?: Sizes
    meta?: ReactNode
  }

export const SimpleListItem: StatelessComponent<SimpleListItemProps> = ({
  leftIcon,
  rightIcon,
  primaryText,
  secondaryText,
  children,
  dense,
  meta,
  size,
  ...otherProps
}) => (
  <ListItem dense={dense} size={size} {...otherProps}>
    {!isNil(leftIcon) && <ListItemGraphic icon={leftIcon} dense={dense} />}

    {isNil(secondaryText) || isNil(meta) ? (
      <ListItemPrimaryText>{primaryText}</ListItemPrimaryText>
    ) : (
      <ListItemText>
        <ListItemPrimaryText>{primaryText}</ListItemPrimaryText>
        {isNil(secondaryText) ? null : (
          <ListItemSecondaryText>{secondaryText}</ListItemSecondaryText>
        )}

        {meta}
      </ListItemText>
    )}

    {!isNil(rightIcon) && <ListItemGraphic icon={rightIcon} dense={dense} />}
    {children}
  </ListItem>
)
