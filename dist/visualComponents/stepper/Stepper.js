"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = exports.Step = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _List = require("../list/List");

var _Status = require("../status/Status");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div`
  ${(0, _exports.flexFlow)('column')};
`;

const Step = ({
  cssOverrides,
  iconColor = _exports.Colors.Gray54,
  iconLeft,
  iconLeftColor,
  iconLeftActiveColor,
  iconRight,
  iconRightColor,
  iconRightActiveColor,
  index = 0,
  isActive = false,
  isDisabled,
  isNumbered = true,
  label,
  onClick = () => {},
  statusIconName,
  statusIconColor,
  subtitle
}) => {
  const textStyles = (0, _styledComponents.css)`
    color: ${isActive ? (0, _exports.getColor)(_exports.Colors.BrandLightBlue) : 'inherit'};
    margin-left: ${isNumbered || iconLeft ? `12px;` : `0`};
  `;
  return /*#__PURE__*/_react.default.createElement(_List.ListItem, {
    cssOverrides: cssOverrides,
    size: _exports.Sizes.DP32,
    onClick: onClick,
    disabled: isDisabled,
    className: isActive ? 'is-active' : ''
  }, isNumbered ? /*#__PURE__*/_react.default.createElement(_Status.Status, {
    inactive: !isActive || isDisabled
  }, index + 1) : iconLeft ? /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: iconLeft,
    color: isActive ? iconLeftActiveColor !== null && iconLeftActiveColor !== void 0 ? iconLeftActiveColor : _exports.Colors.BrandLightBlue : iconLeftColor !== null && iconLeftColor !== void 0 ? iconLeftColor : iconColor
  }) : null, subtitle ? /*#__PURE__*/_react.default.createElement(_List.ListItemText, null, /*#__PURE__*/_react.default.createElement(_List.ListItemPrimaryText, {
    cssOverrides: textStyles
  }, label), /*#__PURE__*/_react.default.createElement(_List.ListItemSecondaryText, {
    cssOverrides: textStyles
  }, subtitle)) : /*#__PURE__*/_react.default.createElement(_List.ListItemPrimaryText, {
    cssOverrides: textStyles
  }, label), statusIconName && statusIconColor ? /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: statusIconName,
    size: 12,
    cssOverrides: (0, _styledComponents.css)`
            ${(0, _exports.borderRadius)(_exports.BorderRadius.Round)};

            background: ${(0, _exports.getColor)(statusIconColor)};
            color: ${(0, _exports.getColor)(_exports.Colors.White)};
            padding: 2px;
          `
  }) : iconRight ? /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: iconRight,
    color: isActive ? iconRightActiveColor !== null && iconRightActiveColor !== void 0 ? iconRightActiveColor : _exports.Colors.BrandLightBlue : iconRightColor !== null && iconRightColor !== void 0 ? iconRightColor : iconColor
  }) : null);
};

exports.Step = Step;

const Stepper = props => {
  const {
    isNumbered = true,
    children,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(Container, domProps, _react.default.Children.map(children, (child, idx) => {
    var _child$props, _child$props2;

    return /*#__PURE__*/_react.default.isValidElement(child) ? /*#__PURE__*/_react.default.cloneElement(child, {
      key: `${idx}-vertical-stepper`,
      isNumbered,
      index: idx,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      isActive: (0, _typeGuards.isBoolean)((_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.isActive) ? (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.isActive : props.value === idx,
      onClick: () => {
        var _props$onChange, _child$props3, _child$props3$onClick;

        (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, idx); // eslint-disable-next-line @typescript-eslint/no-unsafe-call

        (_child$props3 = child.props) === null || _child$props3 === void 0 ? void 0 : (_child$props3$onClick = _child$props3.onClick) === null || _child$props3$onClick === void 0 ? void 0 : _child$props3$onClick.call(_child$props3);
      }
    }) : null;
  }));
};

exports.Stepper = Stepper;