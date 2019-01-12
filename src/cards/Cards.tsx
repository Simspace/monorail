import React, { StatelessComponent } from "react";
import { AppIcon } from "appIcon/AppIcon";
import { Icon } from "icon/Icon";
import {
  AppName,
  BorderRadius,
  borderRadius,
  Colors,
  colors,
  ElevationRange,
  flexFlow,
  FontSizes,
  getElevation,
  typography
} from "CommonStyles";
import styled, { css, SimpleInterpolation } from "styled-components";

// building-blocks/cards/background
type BBCardBackgroundProps = {
  css?: SimpleInterpolation;
  hover?: boolean;
  elevation?: ElevationRange;
};

export const BBCardBackground = styled<BBCardBackgroundProps, "div">("div")`
  ${({ hover }) =>
    hover &&
    css`
      cursor: pointer;
      transition: box-shadow ease 125ms;

      &:hover {
        ${getElevation(ElevationRange.Elevation5)};
      }
    `};
  ${({ elevation = ElevationRange.Elevation1 }) => getElevation(elevation)};

  ${flexFlow()};
  ${borderRadius(BorderRadius.Medium)};

  background: ${colors(Colors.White)};
  overflow: hidden;

  ${({ css: cssOverrides }) => cssOverrides};
`;

const BBCardHeaderContainer = styled("div")`
  ${flexFlow("row")};
  align-items: center;
  flex-shrink: 0;
  height: 32px;
  padding: 0 16px;
  position: relative; /* BBCardBottomBorder is pos:abs relative to this. */
`;

const BBCardHeaderTitle = styled("h1")`
  ${typography(700, FontSizes.Title5)};
  margin: 0;
`;

const StyledAppIconLeft = styled(AppIcon)`
  margin-right: 16px;
`;

const StyledIconLeft = styled(Icon)`
  margin-right: 16px;
`;

const StyledIconRight = styled(Icon)`
  margin-left: 16px;
`;

type BBCardBottomBorderProps = {
  accentColor?: string;
};

const BBCardBottomBorder = styled<BBCardBottomBorderProps, "div">("div")`
  ${({ accentColor }) => css`
    background: linear-gradient(
      to right,
      ${colors(Colors.White, 0)} 0,
      ${accentColor} 16px,
      ${accentColor} calc(100% - 16px),
      ${colors(Colors.White, 0)} 100%
    );
  `};

  bottom: 0;
  height: 1px;
  left: 0;
  position: absolute;
  right: 0;
`;

type BBCardHeaderProps = BBCardBottomBorderProps & {
  appIcon?: AppName;
  iconLeft?: string;
  iconRight?: string;
  noBorder?: boolean;
  title: string;
};

// building-blocks/cards/header
export const BBCardHeader: StatelessComponent<BBCardHeaderProps> = ({
  accentColor = colors(Colors.BrandLightBlue),
  appIcon,
  children,
  iconLeft,
  iconRight,
  noBorder,
  title
}) => (
  <BBCardHeaderContainer>
    {appIcon && <StyledAppIconLeft appName={appIcon} />}
    {iconLeft && <StyledIconLeft icon={iconLeft} />}
    <BBCardHeaderTitle>{title}</BBCardHeaderTitle>
    {iconRight && <StyledIconRight icon={iconRight} />}
    {children}
    {!noBorder && <BBCardBottomBorder accentColor={accentColor} />}
  </BBCardHeaderContainer>
);

// building-blocks/cards/card-grid
type BBCardGridProps = {
  cardWidth?: number;
  css?: SimpleInterpolation;
};

export const BBCardGrid = styled<BBCardGridProps, "div">("div")`
  background: ${colors(Colors.Grey99)};
  display: grid;
  flex-grow: 1;
  grid-auto-rows: max-content;
  grid-gap: 16px;
  grid-template-columns: repeat(
    auto-fill,
    ${({ cardWidth = 256 }) => cardWidth}px
  );
  justify-content: center;
  overflow-y: auto;
  padding: 20px 32px 14px;

  ${({ css: cssOverrides }) => cssOverrides};
`;
