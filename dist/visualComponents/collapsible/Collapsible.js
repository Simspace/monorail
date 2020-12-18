"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collapsible = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _Option = require("fp-ts/lib/Option");

var _pipeable = require("fp-ts/lib/pipeable");

var _exports = require("../../helpers/exports");

var _StyleHelpers = require("../../StyleHelpers");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Icon = require("../icon/Icon");

var _ScrollAnimation = require("../layout/ScrollAnimation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styled Components
 */
const CollapsibleWrapper = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Collapsible__CollapsibleWrapper",
  componentId: "sc-1fszrfe-0"
})(["display:flex;flex-wrap:nowrap;flex-direction:column;overflow:hidden;flex-grow:0;flex-shrink:", ";flex-basis:auto;min-height:40px;"], props => props.isContentScrollable ? 1 : 0);

const CollapsibleHeader = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Collapsible__CollapsibleHeader",
  componentId: "sc-1fszrfe-1"
})(["", " width:100%;box-sizing:border-box;height:40px;", " align-items:center;margin:0;padding:0;position:relative;", ""], (0, _exports.flexFlow)('row'), props => props.iconPosition === 'right' && `justify-content: space-between;`, props => props.clickTarget === 'icon' && `padding: 16px;
      background: ${props.expanded ? (0, _exports.getColor)(_exports.Colors.SidebarActive) : (0, _exports.getColor)(_exports.Colors.White)};`);

const CollapsibleHeaderButton = /*#__PURE__*/_styledComponents.default.button.withConfig({
  displayName: "Collapsible__CollapsibleHeaderButton",
  componentId: "sc-1fszrfe-2"
})(["", " align-items:center;background:", ";border:none;cursor:pointer;justify-content:", ";padding:12px 16px;user-select:auto;width:100%;&:hover{background:", ";}", ""], (0, _exports.flexFlow)('row'), props => props.expanded ? (0, _exports.getColor)(_exports.Colors.SidebarActive) : (0, _exports.getColor)(_exports.Colors.White), props => props.iconPosition === 'left' ? `flex-start` : `space-between`, props => props.expanded ? (0, _exports.getColor)(_exports.Colors.SidebarActive) : (0, _exports.getColor)(_exports.Colors.SidebarBg), (0, _exports.baseFocusStyles)());

const CollapsibleContent = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "Collapsible__CollapsibleContent",
  componentId: "sc-1fszrfe-3"
})(["display:flex;flex-direction:column;flex:1;flex-basis:auto;overflow:hidden;background:", ";padding-left:", "px;", ""], (0, _exports.getColor)(_exports.Colors.White), props => props.iconPosition === 'left' ? 28 : 0, props => props.cssOverrides);

const getChildrenHeights = node => {
  let h = 0;

  if (node.hasChildNodes()) {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < node.children.length; i++) {
      h = h + node.children[i].scrollHeight;
    }
  }

  return h;
};
/*
 * Types
 */

/**
 * Create a Collapsible
 *
 * @param header        - header content
 * @param content       - collapsible content
 * @param expanded?     - collapsible content is expanded/visible, default is false
 * @param onClick?      - any extra functionality that should happen on header click
 *                        (`isExpanded` is passed to the function passed in for outside
 *                          control of expanded state)
 * @param iconPosition? - header icon position (left or right)
 * @param iconCss?      - any css overrides for the icon
 * @param maxDuration?  - max duration for transition in ms
 * @param msPerPx?      - ms / px for transition
 * @param contentCss?   - any css overrides for the content container
 * @param clickTarget?  - hit target for expand/collapse action (header or icon)
 */


var _StyledScrollAnimation = /*#__PURE__*/(0, _styledComponents.default)(_ScrollAnimation.ScrollAnimation).withConfig({
  displayName: "Collapsible___StyledScrollAnimation",
  componentId: "sc-1fszrfe-4"
})(["overflow-y:", ";"], p => p._css);

/*
 * Components
 */
const Collapsible = props => {
  const {
    header,
    content,
    expanded,
    onClick,
    iconPosition = 'left',
    iconCss,
    labelId,
    sectionId,
    maxDuration = 300,
    contentCss,
    msPerPx = 4,
    clickTarget = 'header',
    isContentScrollable = false,
    defaultOpen = false,
    ...domProps
  } = props;
  const [localExpanded, setLocalExpanded] = (0, _react.useState)(defaultOpen);
  const [contentHeight, setContentHeight] = (0, _react.useState)(0);
  const contentRef = (0, _react.useRef)(null);
  const isExpanded = (0, _pipeable.pipe)((0, _Option.fromNullable)(expanded), (0, _Option.getOrElse)(() => localExpanded));
  (0, _react.useEffect)(() => {
    if (isExpanded && (contentRef === null || contentRef === void 0 ? void 0 : contentRef.current)) {
      setContentHeight(getChildrenHeights(contentRef.current));
    }
  }, [isExpanded, content]);

  const renderIcon = () => {
    const icon = iconPosition === 'left' ? isExpanded ? 'arrow_drop_down' : 'arrow_right' : isExpanded ? 'expand_less' : 'expand_more';
    return clickTarget === 'header' ? /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      icon: icon,
      cssOverrides: `margin-right: ${iconPosition === 'left' ? 12 : 0}px; ${iconCss}`
    }) : /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
      id: labelId,
      "aria-expanded": isExpanded,
      "aria-controls": sectionId,
      icon: icon,
      display: _buttonTypes.ButtonDisplay.Chromeless,
      cssOverrides: `${iconPosition === 'left' && `margin-right: 12px;`} 
          ${iconCss}`,
      onClick: handleToggleExpand
    });
  };

  const handleToggleExpand = event => (0, _pipeable.pipe)((0, _Option.fromNullable)(onClick), (0, _Option.fold)(() => setLocalExpanded(!isExpanded), parentOnClick => (0, _pipeable.pipe)((0, _Option.fromNullable)(expanded), (0, _Option.fold)(() => setLocalExpanded(!isExpanded), _ => parentOnClick(event, !isExpanded)))));

  return /*#__PURE__*/_react.default.createElement(CollapsibleWrapper, _extends({
    isContentScrollable: isContentScrollable
  }, domProps), /*#__PURE__*/_react.default.createElement(CollapsibleHeader, _extends({
    iconPosition: iconPosition,
    clickTarget: clickTarget,
    expanded: isExpanded
  }, domProps), clickTarget === 'header' ? /*#__PURE__*/_react.default.createElement(CollapsibleHeaderButton, {
    id: labelId,
    "aria-expanded": isExpanded,
    "aria-controls": sectionId,
    iconPosition: iconPosition,
    expanded: isExpanded // Adding this arbitrary class because we have sass in `Button.scss`
    // that targets `button.not(.new-button)` and adds a whole bunch of
    // unwanted styling - AB 05/14/20
    ,
    className: 'new-button',
    onClick: handleToggleExpand
  }, iconPosition === 'left' && renderIcon(), header, iconPosition !== 'left' && renderIcon()) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, iconPosition === 'left' && renderIcon(), header, iconPosition !== 'left' && renderIcon())), /*#__PURE__*/_react.default.createElement(CollapsibleContent, _extends({
    id: sectionId,
    role: "region",
    "aria-hidden": !isExpanded,
    "aria-labelledby": labelId,
    iconPosition: iconPosition,
    cssOverrides: contentCss
  }, domProps), /*#__PURE__*/_react.default.createElement(_StyledScrollAnimation, {
    _css: isContentScrollable ? 'auto' : 'hidden'
  }, /*#__PURE__*/_react.default.createElement(_StyleHelpers.Div, {
    ref: contentRef,
    cssOverrides: (0, _styledComponents.css)(["height:", "px;transition:height 300ms ease-in-out;overflow:", ";"], isExpanded ? contentHeight + 12 : 0, isExpanded ? 'visible' : 'hidden')
  }, content))));
};

exports.Collapsible = Collapsible;