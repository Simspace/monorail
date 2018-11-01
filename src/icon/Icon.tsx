import React, { ComponentType, MouseEvent } from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { Admin } from 'icon/custom/Admin';
import { Colors, colors } from 'CommonStyles';
import { Dashboard } from 'icon/custom/Dashboard';
import { Omit } from 'src/common/util/CoreUtils';
import { Range } from 'icon/custom/Range';
import { Tracker } from 'icon/custom/Tracker';
import { Hardhat } from 'icon/custom/Hardhat';
import { Academy } from 'icon/custom/Academy';
import { Impact } from 'icon/custom/Impact';

const customIcons: { [key: string]: ComponentType<CustomIconProps> } = {
  academy: Academy,
  admin: Admin,
  dashboard: Dashboard,
  hardhat: Hardhat,
  impact: Impact,
  range: Range,
  tracker: Tracker,
  training: Academy,
};

export const Icon = styled<IconProps>(({ icon, ...otherProps }: IconProps) => {
  const CustomIcon = customIcons[icon];

  if (CustomIcon) {
    return <CustomIcon {...otherProps} />;
  }

  return <i {...otherProps}>{icon}</i>;
})`
  ${({ size }) =>
    size
      ? css`
          font-size: ${size}px;
        `
      : css`
          font-size: 16px;
        `};

  color: ${colors(Colors.Black54)};
  direction: ltr;
  display: inline-block;
  fill: currentColor; /* Custom icons are svg and need this so that color works correct. */
  font-family: 'Material Icons'; /* stylelint-disable-line font-family-no-missing-generic-family-keyword */
  font-style: normal;
  font-weight: normal;
  height: 1em;
  letter-spacing: normal;
  line-height: 1;
  text-transform: none;
  user-select: none;
  white-space: nowrap;
  width: 1em;
  word-wrap: normal;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';

  ${({ css: cssOverrides }) => cssOverrides};
`;

export type IconProps = {
  className?: string;
  css?: SimpleInterpolation;
  icon: string;
  onClick?: (event: MouseEvent<Element>) => void;
  size?: number;
};

export type CustomIconProps = Omit<IconProps, 'icon'>;
