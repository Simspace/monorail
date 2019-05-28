"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElevationShadow = exports.getElevationBackground = exports.ElevationRange = void 0;

var _color = require("./color");

var _styledComponents = require("./styled-components");

var _theme = require("./theme");

let ElevationRange;
exports.ElevationRange = ElevationRange;

(function (ElevationRange) {
  ElevationRange["Elevation0"] = "elevation0";
  ElevationRange["Elevation1"] = "elevation1";
  ElevationRange["Elevation2"] = "elevation2";
  ElevationRange["Elevation3"] = "elevation3";
  ElevationRange["Elevation4"] = "elevation4";
  ElevationRange["Elevation5"] = "elevation5";
  ElevationRange["Elevation6"] = "elevation6";
  ElevationRange["Elevation7"] = "elevation7";
  ElevationRange["Elevation8"] = "elevation8";
  ElevationRange["Elevation9"] = "elevation9";
  ElevationRange["Elevation10"] = "elevation10";
  ElevationRange["Elevation11"] = "elevation11";
  ElevationRange["Elevation12"] = "elevation12";
  ElevationRange["Elevation13"] = "elevation13";
  ElevationRange["Elevation14"] = "elevation14";
  ElevationRange["Elevation15"] = "elevation15";
  ElevationRange["Elevation16"] = "elevation16";
  ElevationRange["Elevation17"] = "elevation17";
  ElevationRange["Elevation18"] = "elevation18";
  ElevationRange["Elevation19"] = "elevation19";
  ElevationRange["Elevation20"] = "elevation20";
  ElevationRange["Elevation21"] = "elevation21";
  ElevationRange["Elevation22"] = "elevation22";
  ElevationRange["Elevation23"] = "elevation23";
  ElevationRange["Elevation24"] = "elevation24";
})(ElevationRange || (exports.ElevationRange = ElevationRange = {}));

const elevationShadow = {
  [ElevationRange.Elevation0]: '0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation1]: '0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation2]: '0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation3]: '0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation4]: '0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation5]: '0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation6]: '0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)',
  [ElevationRange.Elevation7]: '0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)',
  [ElevationRange.Elevation8]: '0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)',
  [ElevationRange.Elevation9]: '0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)',
  [ElevationRange.Elevation10]: '0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)',
  [ElevationRange.Elevation11]: '0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)',
  [ElevationRange.Elevation12]: '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation13]: '0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation14]: '0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)',
  [ElevationRange.Elevation15]: '0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation16]: '0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation17]: '0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)',
  [ElevationRange.Elevation18]: '0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)',
  [ElevationRange.Elevation19]: '0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)',
  [ElevationRange.Elevation20]: '0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation21]: '0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation22]: '0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)',
  [ElevationRange.Elevation23]: '0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)',
  [ElevationRange.Elevation24]: '0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)'
};
const elevationColor = {
  [_theme.Mode.Light]: {
    [_theme.ThemeColors.BackgroundPrimary]: elevation => {
      return 1;
    },
    [_theme.ThemeColors.BackgroundSecondary]: elevation => {
      return 1;
    }
  },
  [_theme.Mode.Dark]: {
    [_theme.ThemeColors.BackgroundPrimary]: elevation => {
      return 1;
    },
    [_theme.ThemeColors.BackgroundSecondary]: elevation => {
      switch (elevation) {
        case ElevationRange.Elevation0:
          return 0;

        case ElevationRange.Elevation1:
          return 0.05;

        case ElevationRange.Elevation2:
          return 0.07;

        case ElevationRange.Elevation3:
          return 0.08;

        case ElevationRange.Elevation4:
          return 0.09;

        case ElevationRange.Elevation5:
          return 0.1;

        case ElevationRange.Elevation6:
          return 0.11;

        case ElevationRange.Elevation7:
          return 0.115;

        case ElevationRange.Elevation8:
          return 0.12;

        case ElevationRange.Elevation9:
          return 0.125;

        case ElevationRange.Elevation10:
          return 0.13;

        case ElevationRange.Elevation11:
          return 0.135;

        case ElevationRange.Elevation12:
          return 0.14;

        case ElevationRange.Elevation13:
          return 0.1425;

        case ElevationRange.Elevation14:
          return 0.145;

        case ElevationRange.Elevation15:
          return 0.1475;

        case ElevationRange.Elevation16:
          return 0.15;

        case ElevationRange.Elevation17:
          return 0.15125;

        case ElevationRange.Elevation18:
          return 0.1525;

        case ElevationRange.Elevation19:
          return 0.15375;

        case ElevationRange.Elevation20:
          return 0.155;

        case ElevationRange.Elevation21:
          return 0.15625;

        case ElevationRange.Elevation22:
          return 0.1575;

        case ElevationRange.Elevation23:
          return 0.15875;

        case ElevationRange.Elevation24:
          return 0.16;
        // no default
      }
    }
  }
};

const getElevationColor = elevation => {
  return ({
    theme
  }) => {
    const currentTheme = theme[theme.mode];
    const primaryColor = (0, _color.getColor)(currentTheme[_theme.ThemeColors.BackgroundPrimary], elevationColor[theme.mode][_theme.ThemeColors.BackgroundPrimary](elevation));
    const secondaryColor = (0, _color.getColor)(currentTheme[_theme.ThemeColors.BackgroundSecondary], elevationColor[theme.mode][_theme.ThemeColors.BackgroundSecondary](elevation));
    return `linear-gradient(${secondaryColor}, ${secondaryColor}), linear-gradient(${primaryColor}, ${primaryColor})`;
  };
};

const getElevationBackground = elevation => (0, _styledComponents.css)(["background-image:", ";"], getElevationColor(elevation));

exports.getElevationBackground = getElevationBackground;

const getElevationShadow = elevation => (0, _styledComponents.css)(["box-shadow:", ";"], elevationShadow[elevation]);

exports.getElevationShadow = getElevationShadow;