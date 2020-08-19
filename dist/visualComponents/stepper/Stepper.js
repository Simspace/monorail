"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = exports.Step = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _Icon = require("../icon/Icon");

var _List = require("../list/List");

var _Status = require("../status/Status");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents2.default.div`
  ${(0, _exports.flexFlow)('column')};
`;

var _StyledIcon =
/*#__PURE__*/
(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Stepper___StyledIcon",
  componentId: "xgzw2t-0"
})(["", ";background:", ";color:", ";padding:2px;"], p => p._css, p => p._css2, p => p._css3);

const Step = ({
  cssOverrides,
  iconColor = _exports.Colors.Gray54,
  iconLeft,
  iconRight,
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
  const textStyles = (0, _styledComponents2.css)`
    color: ${isActive ? (0, _exports.getColor)(_exports.Colors.BrandLightBlue) : 'inherit'};
    margin-left: ${isNumbered || iconLeft ? `12px;` : `0`};
  `;
  return _react.default.createElement(_List.ListItem, {
    cssOverrides: cssOverrides,
    size: _exports.Sizes.DP32,
    onClick: onClick,
    disabled: isDisabled,
    className: isActive ? 'is-active' : ''
  }, isNumbered ? _react.default.createElement(_Status.Status, {
    inactive: !isActive || isDisabled
  }, index + 1) : iconLeft ? _react.default.createElement(_Icon.Icon, {
    icon: iconLeft,
    color: isActive ? _exports.Colors.BrandLightBlue : iconColor
  }) : null, subtitle ? _react.default.createElement(_List.ListItemText, null, _react.default.createElement(_List.ListItemPrimaryText, {
    cssOverrides: textStyles
  }, label), _react.default.createElement(_List.ListItemSecondaryText, {
    cssOverrides: textStyles
  }, subtitle)) : _react.default.createElement(_List.ListItemPrimaryText, {
    cssOverrides: textStyles
  }, label), statusIconName && statusIconColor ? _react.default.createElement(_StyledIcon, {
    icon: statusIconName,
    size: 12,
    _css: (0, _exports.borderRadius)(_exports.BorderRadius.Round),
    _css2: (0, _exports.getColor)(statusIconColor),
    _css3: (0, _exports.getColor)(_exports.Colors.White)
  }) : iconRight ? _react.default.createElement(_Icon.Icon, {
    icon: iconRight,
    color: isActive ? _exports.Colors.BrandLightBlue : iconColor
  }) : null);
};

exports.Step = Step;

const Stepper = props => {
  const {
    isNumbered = true,
    children,
    ...domProps
  } = props;
  return _react.default.createElement(Container, domProps, _react.default.Children.map(children, (child, idx) => {
    return _react.default.isValidElement(child) ? _react.default.cloneElement(child, {
      key: `${idx}-vertical-stepper`,
      isNumbered,
      index: idx,
      isActive: props.value === idx,
      onClick: () => {
        props.onChange && props.onChange(idx);
      }
    }) : null;
  }));
};

exports.Stepper = Stepper;