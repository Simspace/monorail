import React, { Component } from "react";
import styled, { css, SimpleInterpolation } from "styled-components";
import {
  AppName,
  borderRadius,
  colors,
  Colors,
  convertAppNameToColor,
  flexFlow
} from "CommonStyles";
import { Icon } from "icon/Icon";

const CCAppIcon = styled<AppIconProps, "div">("div")`
  ${({ appName }) => css`
    background: ${colors(convertAppNameToColor(appName))};
  `};

  ${flexFlow("row")};
  ${borderRadius()};

  box-sizing: border-box;
  height: 16px;
  width: 16px;

  ${Icon} {
    fill: ${colors(Colors.White)};
    height: 80%;
    margin: auto;
    width: 80%;
  }

  ${({ css: cssOverrides }) => cssOverrides};
`;

type AppIconProps = {
  appName: AppName;
  css?: SimpleInterpolation;
};

export class AppIcon extends Component<AppIconProps> {
  convertAppNameToString = () => {
    const { appName } = this.props;

    switch (appName) {
      default:
      case AppName.Admin:
        return "admin";
      case AppName.Dashboard:
        return "dashboard";
      case AppName.Hardhat:
        return "hardhat";
      case AppName.Impact:
        return "impact";
      case AppName.Range:
        return "range";
      case AppName.Tracker:
        return "tracker";
      case AppName.Training:
        return "training";
    }
  };

  render() {
    const { appName, ...otherProps } = this.props;
    return (
      <CCAppIcon appName={appName} {...otherProps}>
        <Icon icon={this.convertAppNameToString()} />
      </CCAppIcon>
    );
  }
}
