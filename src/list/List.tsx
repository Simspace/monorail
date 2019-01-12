import React, {
  Children,
  CSSProperties,
  MouseEvent,
  StatelessComponent,
  ReactType
} from "react";
import styled, { css, SimpleInterpolation } from "styled-components";

import {
  baseChromelessStyles,
  buttonTransiton,
  Colors,
  colors,
  flexFlow,
  FontSizes,
  Sizes,
  typography
} from "CommonStyles";
import { Icon, IconProps } from "icon/Icon";
import TextTruncate from "react-truncate";
import { isNil } from "src/common/util/CoreUtils";

/*
 *
 * List Container
 *
 */

/*
 * Styles
 */

const BBListContainer = styled<BBListContainerProps, "div">("div")`
  ${flexFlow()};

  overflow-y: auto;
  padding: 8px 0;

  ${({ css: cssOverrides }) => cssOverrides};
`;

/*
 * Types
 */

type BBListContainerProps = {
  css?: SimpleInterpolation;
};

type ListContainerProps = BBListContainerProps & {
  emptyText?: string;
};

/*
 * Component
 */

export const ListContainer: StatelessComponent<ListContainerProps> = ({
  children,
  css: cssOverrides,
  emptyText = "I'm empty :("
}) => (
  <BBListContainer css={cssOverrides}>
    {Children.count(children) ? (
      children
    ) : (
      <ListItem
        css={css`
          color: ${colors(Colors.Black54)};
        `}
      >
        {emptyText}
      </ListItem>
    )}
  </BBListContainer>
);

/*
 *
 * List Item
 *
 */

/*
 * Styles
 */

const BBListItemContainer = styled<BBListItemContainerProps, "div">("div")`
  ${({ onClick, as }) =>
    ((!isNil(onClick) && onClick) || (!isNil(as) && as)) &&
    css`
      cursor: pointer;
      user-select: none;

      ${buttonTransiton};

      ${baseChromelessStyles()};
    `};

  ${flexFlow("row")};

  background: transparent;
  box-sizing: border-box;
  flex-shrink: 0;
  min-height: ${({ size = Sizes.DP24 }) => size}px;
  padding: ${({ size }) => {
      switch (size) {
        case Sizes.DP32:
          return 3;
        case Sizes.DP40:
          return 7;
        default:
          return 0;
      }
    }}px
    ${({ dense }) => (dense ? 8 : 16)}px;
  position: relative;

  ${({ css: cssOverrides }) => cssOverrides};
`;
type BBListSizeIconProps = BBListSizeProps & { icon: string };
const StyledLeftIcon = styled<BBListSizeIconProps & IconProps>(
  ({ dense, ...otherProps }) => <Icon {...otherProps} />
)`
  margin-right: ${({ dense }) => (dense ? 8 : 16)}px;
  margin-top: 4px;
`;

// Have to do this span so that TextTruncate gets the right width because of padding.
const BBListItemContent = styled("span")`
  ${typography(500, FontSizes.Title5)};

  padding-top: 5px;
  padding-bottom: 3px;
  width: 100%;
`;

/*
 * Types
 */
type LinkProps = {
  activeClassName?: string;
  activeStyle?: CSSProperties;
  onlyActiveOnIndex?: boolean;
  to?: string;
};

type BBListSizeProps = {
  dense?: boolean;
};

type BBListItemContainerProps = LinkProps &
  BBListSizeProps & {
    as?: ReactType;
    css?: SimpleInterpolation;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    size?: Sizes;
    className?: string;
  };

type ListItemProps = BBListItemContainerProps & {
  leftIcon?: string;
  rightItem?: React.ReactNode;
};

/*
 * Component
 */

export const ListItem: StatelessComponent<ListItemProps> = ({
  children,
  leftIcon,
  rightItem,
  dense,
  ...otherProps
}) => (
  <BBListItemContainer
    activeClassName="is-active"
    dense={dense}
    {...otherProps}
  >
    {leftIcon && <StyledLeftIcon dense={dense} icon={leftIcon} />}
    <BBListItemContent>
      <TextTruncate lines={2} trimWhitespace>
        {children}
      </TextTruncate>
    </BBListItemContent>
    {rightItem}
  </BBListItemContainer>
);
