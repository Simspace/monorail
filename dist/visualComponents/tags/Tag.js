"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagIconClose = exports.TagClose = exports.TagIcon = exports.TagLabel = exports.TagCircle = exports.Tag = exports.TagContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Icon = require("../icon/Icon");

var _Text = require("../typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const tagHeight = 24;
const circleWidth = tagHeight - 4;
const circleRadius = circleWidth / 2;
const iconSize = tagHeight / 2;

const getIconStyles = props => (0, _styledComponents.css)(["color:", ";margin:0 ", "px;position:relative;z-index:1;"], props.type === 'icon' ? (0, _exports.getColor)(_exports.Colors.BrandLightBlue) : (0, _exports.getColor)(_exports.Colors.White), iconSize / 2);

const labelStyles = /*#__PURE__*/(0, _styledComponents.css)(["color:", ";", ";"], (0, _exports.getColor)(_exports.Colors.Black89a), _exports.ellipsis);

const TagContainer = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Tag__TagContainer",
  componentId: "sc-12x6kd4-0"
})(({
  hasButton,
  hasIcon,
  hasLabel
}) => (0, _styledComponents.css)(["", ";", ";display:inline-flex;align-items:center;background:", ";border-radius:", "px;height:", "px;position:relative;text-transform:uppercase;user-select:none;", " ", ""], !hasLabel && (0, _styledComponents.css)(["width:", "px;"], tagHeight), (0, _exports.flexFlow)('row'), (0, _exports.getColor)(_exports.Colors.Black, 0.07), tagHeight / 2, tagHeight, hasIcon && (0, _styledComponents.css)(["&::before{background:", ";border-radius:", "px;bottom:2px;content:'';left:2px;position:absolute;top:2px;width:", "px;}"], (0, _exports.getColor)(_exports.Colors.White), circleRadius, circleWidth), hasButton && (0, _styledComponents.css)(["&::after{background:", ";border-radius:", "px;bottom:2px;content:'';right:2px;position:absolute;top:2px;width:", "px;}"], (0, _exports.getColor)(_exports.Colors.BrandLightBlue), circleRadius, circleWidth)));
/**
 * Consider using one of the more specific Tag components, like
 * `TagIcon` and `TagLabel`. The props for a bare `Tag` are not the most
 * instructive.
 *
 * Use Tags to visually label UI objects for quick recognition and navigation,
 * like categories and metadata.
 *
 * ```tsx
 * <TagLabel>Your Tag Here</TagLabel>
 * <TagIcon icon="person">Your Tag Here</TagIcon>
 * <TagClose onClose={() => alert('closed')}>Close Me</TagClose>
 * ```
 */


exports.TagContainer = TagContainer;

var _StyledIcon = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Tag___StyledIcon",
  componentId: "sc-12x6kd4-1"
})(["", ""], p => p._css);

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "Tag___StyledText",
  componentId: "sc-12x6kd4-2"
})(["", ""], labelStyles);

var _StyledSpan = /*#__PURE__*/(0, _styledComponents.default)("span").withConfig({
  displayName: "Tag___StyledSpan",
  componentId: "sc-12x6kd4-3"
})(["cursor:pointer;"]);

var _StyledIcon2 = /*#__PURE__*/(0, _styledComponents.default)(_Icon.Icon).withConfig({
  displayName: "Tag___StyledIcon2",
  componentId: "sc-12x6kd4-4"
})(["", ""], p => p._css2);

const Tag = props => {
  var _props$button, _props$button2, _props$button3;

  const {
    label = '',
    icon,
    title,
    ...otherProps
  } = props;
  const hasButton = typeof ((_props$button = props.button) === null || _props$button === void 0 ? void 0 : _props$button.onClick) === 'function';
  const hasIcon = !(0, _typeGuards.isUndefined)(icon);
  const hasLabel = !(0, _typeGuards.isEmptyString)(label);
  return /*#__PURE__*/_react.default.createElement(TagContainer, _extends({
    hasButton: hasButton,
    hasIcon: hasIcon,
    hasLabel: hasLabel,
    title: title
  }, otherProps), !(0, _typeGuards.isUndefined)(icon) && /*#__PURE__*/_react.default.createElement(_StyledIcon, {
    icon: icon,
    size: iconSize,
    _css: getIconStyles({
      type: 'icon'
    })
  }), !(0, _typeGuards.isEmptyString)(label) && /*#__PURE__*/_react.default.createElement(_StyledText, {
    fontSize: _exports.FontSizes.Micro,
    fontWeight: _exports.FontWeights.Bold,
    margin: `0 ${hasButton ? 4 : 8}px 0 ${hasIcon ? 2 : 8}px`
  }, label), hasButton && /*#__PURE__*/_react.default.createElement(_StyledSpan, {
    "aria-label": props.title || props.label,
    role: "button",
    onClick: (_props$button2 = props.button) === null || _props$button2 === void 0 ? void 0 : _props$button2.onClick
  }, /*#__PURE__*/_react.default.createElement(_StyledIcon2, {
    icon: ((_props$button3 = props.button) === null || _props$button3 === void 0 ? void 0 : _props$button3.icon) || '',
    size: iconSize,
    _css2: getIconStyles({
      type: 'button'
    })
  })));
};

exports.Tag = Tag;

const TagCircle = props => /*#__PURE__*/_react.default.createElement(Tag, props);

exports.TagCircle = TagCircle;

const TagLabel = props => /*#__PURE__*/_react.default.createElement(Tag, _extends({
  label: props.children
}, props));

exports.TagLabel = TagLabel;

const TagIcon = props => /*#__PURE__*/_react.default.createElement(Tag, _extends({
  label: props.children
}, props));

exports.TagIcon = TagIcon;

const TagClose = props => /*#__PURE__*/_react.default.createElement(Tag, _extends({
  button: {
    icon: 'close',
    onClick: props.onClose
  },
  label: props.children
}, props));

exports.TagClose = TagClose;

const TagIconClose = props => /*#__PURE__*/_react.default.createElement(Tag, _extends({
  button: {
    icon: 'close',
    onClick: props.onClose
  },
  label: props.children
}, props));

exports.TagIconClose = TagIconClose;