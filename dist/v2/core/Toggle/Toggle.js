"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = Toggle;
exports.StyledSwitch = void 0;

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents = _interopRequireWildcard(require("../../../helpers/styled-components"));

var Icons = _interopRequireWildcard(require("../../icons/Icons"));

var _helpers = require("../../shared/helpers");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SIZE = {
  Default: 'default',
  Large: 'large'
};
//#region Icons used in Toggle
const iconCss = (0, _styledComponents.css)`
  border-radius: 50%;
  box-sizing: border-box;
  background: ${({
  theme
}) => theme.v2.FoundationPlate};

  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.14))
    drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2));
`;
const iconSizeCss = {
  [SIZE.Default]: (0, _styledComponents.css)`
    width: 10px;
    height: 10px;
    padding: 1px;
  `,
  [SIZE.Large]: (0, _styledComponents.css)`
    width: 14px;
    height: 14px;
    padding: 2px;
  `
};
const CheckedIcon = (0, _styledComponents.default)(Icons.Check).withConfig((0, _helpers.propBlockerConfig)(['size'])).attrs(props => {
  var _props$size;

  return {
    size: (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : SIZE.Default
  };
})`
  ${({
  size
}) => iconSizeCss[size]}
  ${iconCss}
`;
const UncheckedIcon = (0, _styledComponents.default)(Icons.Close).withConfig((0, _helpers.propBlockerConfig)(['size'])).attrs(props => {
  var _props$size2;

  return {
    size: (_props$size2 = props.size) !== null && _props$size2 !== void 0 ? _props$size2 : SIZE.Default
  };
})`
  ${({
  size
}) => iconSizeCss[size]}
  ${iconCss}
`; //#endregion
//#region Toggle CSS

const baseCss = (0, _styledComponents.css)`
  padding: 0;
  overflow: visible;

  & .MuiSwitch-switchBase {
    color: ${({
  theme
}) => theme.v2.FoundationGraphic};
  }
  & .Mui-checked {
    color: ${({
  theme
}) => theme.v2.ActionPrimary};

    + .MuiSwitch-track {
      background-color: ${({
  theme
}) => theme.v2.ActionPrimary};
      opacity: 1;
    }
  }
  & .MuiSwitch-track {
    background-color: ${({
  theme
}) => theme.v2.FoundationGraphic};
    opacity: 1;
  }

  & .Mui-focusVisible {
    + .MuiSwitch-track {
      box-shadow: ${({
  theme
}) => `inset 0 0 0 1px ${theme.v2.Accent3}, 0 0 0 3px ${theme.v2.ActionDollop}`};
    }
  }
`;
const sizeCss = {
  [SIZE.Default]: (0, _styledComponents.css)`
    width: 20px;
    height: 12px;

    & .MuiSwitch-switchBase {
      padding: 1px;
    }
    & .Mui-checked {
      transform: translateX(8px);
    }
    & .MuiSwitch-track {
      border-radius: 6px;
    }
  `,
  [SIZE.Large]: (0, _styledComponents.css)`
    width: 30px;
    height: 18px;

    & .MuiSwitch-switchBase {
      padding: 2px;
    }
    & .Mui-checked {
      transform: translateX(12px);
    }
    & .MuiSwitch-track {
      border-radius: 9px;
    }
  `
}; //#endregion

const StyledSwitch = (0, _styledComponents.default)(MUI.Switch).withConfig((0, _helpers.propBlockerConfig)(['size'])).attrs(props => {
  var _props$size3;

  return {
    size: (_props$size3 = props.size) !== null && _props$size3 !== void 0 ? _props$size3 : SIZE.Default
  };
})`
  ${({
  size
}) => sizeCss[size]}
  ${baseCss}
`;
/**
 * Toggle switch
 *
 * - Use a (boolean) Toggle when its change performs an instantaneous action
 *   - [Toggle vs Checkbox](https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8)
 * - [Switch | Material-UI](https://material-ui.com/components/switches/#switch)
 * - [Toggle | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=2233%3A9077)
 */

exports.StyledSwitch = StyledSwitch;

function Toggle(props) {
  const {
    size,
    ...restProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(StyledSwitch, _extends({
    size: size,
    icon: /*#__PURE__*/_react.default.createElement(UncheckedIcon, {
      size: size
    }),
    checkedIcon: /*#__PURE__*/_react.default.createElement(CheckedIcon, {
      size: size
    })
  }, restProps));
}

;
Toggle.muiName = MUI.Switch.muiName; // eslint-disable-line