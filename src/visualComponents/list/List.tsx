import React, {
  Children,
  MouseEvent,
  ReactNode,
  ReactType,
  StatelessComponent,
  Ref,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  PropsWithoutRef,
} from 'react'
import { SimpleInterpolation } from 'styled-components'

import {
  baseChromelessStyles,
  baseFocusStyles,
  buttonTransition,
  ellipsis,
  flexFlow,
  FontSizes,
  Sizes,
  typography,
  Colors,
} from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { getThemeColor, ThemeColors } from '@monorail/helpers/theme'
import {
  isEmptyString,
  isNil,
  isNonEmptyString,
} from '@monorail/sharedHelpers/typeGuards'
import { CommonComponentType, LinkProps } from '@monorail/types'
import { Icon, IconProps } from '@monorail/visualComponents/icon/Icon'
import { IconType } from '@monorail/visualComponents/icon/IconType'

// TODO(unsafe-any): Fix unsafe anys
// tslint:disable no-unsafe-any

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
  as?: ReactType
}

/*
 * Component
 */

export const ListContainer: StatelessComponent<ListContainerProps> = ({
  children,
  cssOverrides,
  emptyText = "I'm empty :(",
  ...domProps
}) => (
  <BBListContainer cssOverrides={cssOverrides} {...domProps}>
    {Children.count(children) > 0 ? (
      children
    ) : (
      <ListItem
        css={css`
          color: ${getThemeColor(ThemeColors.Text500)};
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

type ListSizeProps = {
  dense?: boolean
}

type ListItemProps = LinkProps &
  ListSizeProps &
  CommonComponentType & {
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
    size?: Sizes
    disabled?: boolean
    isLink?: boolean
  }

/*
 * Styles
 */

export const ListItemText = styled.div<CommonComponentType>(
  ({ cssOverrides }) => css`
    /* This is row wrap instead of column nowrap because IE11 doesn't give the item height when it is a column. */
    ${flexFlow('row', 'wrap')}

    overflow: hidden;
    width: 100%;

    ${cssOverrides};
  `,
)

export const ListItemPrimaryText = styled.span<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${typography(500, FontSizes.Title5, 'auto 6px')};
    ${ellipsis};

    color: inherit;
    flex: 1 1 100%;

    ${cssOverrides};
  `,
)

export const ListItemSecondaryText = styled.span<CommonComponentType>(
  ({ cssOverrides }) => css`
    ${typography(500, FontSizes.Micro, 'auto 6px')};
    ${ellipsis};

    color: ${getThemeColor(ThemeColors.Text600)};
    flex: 1 1 100%;

    ${cssOverrides};
  `,
)

type BBListSizeIconProps = ListSizeProps & { icon: string }

export const ListItemGraphic = styled(({ dense, ...domProps }) => (
  <Icon {...domProps} />
))<BBListSizeIconProps & IconProps>(
  // We pick out the `color` prop so that we're specifically _not_ overriding it
  // in the case where it is set (it will get passed into `<Icon .../>` above,
  // which will set the right CSS).
  //
  // Previously this wasn't working because `color: inherit` was overriding it,
  // but I was to scared to delete that line entirely. [MM 2020-07-14]
  ({ dense, cssOverrides, color }) => css`
    && {
      margin: auto ${dense ? 4 : 6}px;
      ${isNil(color) ? 'color: inherit;' : ''}

      ${buttonTransition};

      ${cssOverrides};
    }
  `,
)

export const ListItem = styled.div<ListItemProps>(
  ({
    cssOverrides,
    dense,
    disabled,
    onClick,
    size = Sizes.DP24,
    isLink = false,
  }) => css`
    ${!isNil(onClick) || isLink
      ? css`
          ${baseFocusStyles()};
          ${baseChromelessStyles()}
          ${buttonTransition};

          color: ${getThemeColor(
            isLink ? ThemeColors.ActionPrimary : ThemeColors.Text900,
          )};
          cursor: pointer;
          text-transform: none; /* IE 11 */
          user-select: none;

          /* stylelint-disable selector-type-no-unknown */
          &.is-active,
          &:active,
          &:active ${ListItemGraphic}, &.is-active ${ListItemGraphic} {
            color: ${getThemeColor(
              isLink ? ThemeColors.ActionPrimary : ThemeColors.Text900,
            )};
          }
          /* stylelint-enable selector-type-no-unknown */
        `
      : css`
          color: ${getThemeColor(ThemeColors.Text900)};
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

export type PassedProps = Omit<CommonComponentType, 'as'> &
  LinkProps & { passedAs?: ReactType }

export type SimpleListItemProps = PassedProps & {
  dense?: boolean
  disabled?: boolean
  leftIcon?: IconType
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
  onMouseEnter?: (event: MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void
  primaryText?: ReactNode
  rightIcon?: IconType
  secondaryText?: ReactNode
  size?: Sizes
  meta?: ReactNode
  isLink?: boolean
  leftIconColor?: Colors
  rightIconColor?: Colors
  children?: string | number | ReactNode
  ref?: Ref<any> // tslint:disable-line:no-any
}

export const SimpleListItem: ForwardRefExoticComponent<PropsWithoutRef<
  SimpleListItemProps
> &
  RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  SimpleListItemProps
>((props, ref) => {
  const {
    leftIcon = '', // TODO: fix this - we should not use `''` as an icon
    rightIcon = '', // TODO: fix this - we should not use `''` as an icon
    primaryText = '',
    secondaryText = '',
    children,
    disabled = false,
    dense = false,
    meta = '',
    size = Sizes.DP24,
    onClick,
    isLink = false,
    passedAs,
    cssOverrides,
    leftIconColor,
    rightIconColor,
    ...domProps
  } = props

  return (
    <ListItem
      dense={dense}
      size={size}
      onClick={onClick}
      isLink={isLink}
      as={passedAs}
      disabled={disabled}
      ref={ref}
      {...domProps}
    >
      {isNonEmptyString(leftIcon) && (
        <ListItemGraphic icon={leftIcon} dense={dense} color={leftIconColor} />
      )}

      {isEmptyString(secondaryText) || isNil(meta) ? (
        <ListItemPrimaryText cssOverrides={cssOverrides}>
          {primaryText}
        </ListItemPrimaryText>
      ) : (
        <ListItemText>
          <ListItemPrimaryText>{primaryText}</ListItemPrimaryText>
          {isEmptyString(secondaryText) ? null : (
            <ListItemSecondaryText>{secondaryText}</ListItemSecondaryText>
          )}

          {meta}
        </ListItemText>
      )}

      {isNonEmptyString(rightIcon) && (
        <ListItemGraphic
          icon={rightIcon}
          dense={dense}
          color={rightIconColor}
        />
      )}
      {children}
    </ListItem>
  )
})
