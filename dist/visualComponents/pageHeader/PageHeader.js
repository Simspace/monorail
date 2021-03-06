"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageHeader = exports.TitleContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _baseStyles = require("../../helpers/baseStyles");

var _color = require("../../helpers/color");

var _flex = require("../../helpers/flex");

var _size = require("../../helpers/size");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _theme = require("../../helpers/theme");

var _typography = require("../../helpers/typography");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _BaseLink = require("../hyperLink/BaseLink");

var _HyperLink = require("../hyperLink/HyperLink");

var _Icon = require("../icon/Icon");

var _TabBar = require("../tabs/TabBar");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const PageHeaderContainer = _styledComponents.default.div(({
  cssOverrides,
  hasAboveContent
}) => (0, _styledComponents.css)`
    ${(0, _flex.flexFlow)('column')};

    background: ${props => (0, _color.convertHSLAMapToCss)({ ...(0, _theme.getThemeColorBase)(_theme.ThemeColors.ApplicationPrimary)(props),
  l: 99
})};
    flex-shrink: 0;

    /* Instead of hiding overflow errors, let's see them and fix them. This was causing buttons to be hidden in error. */
    overflow-x: auto;

    position: relative; /* Has this so that the shadow goes over the content below it. */
    z-index: 1; /* Has this so that the shadow goes over the content below it. */

    &::before {
      border-bottom: 1px solid ${(0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary)};
      background: inherit;
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -5;
    }

    ${_TabBar.TabBarContainer} {
      padding: 0 24px;

      ${!hasAboveContent && (0, _styledComponents.css)`
          margin-top: -8px;
        `};
    }

    ${cssOverrides};
  `);

const PageHeaderNavigation = _styledComponents.default.div`
  ${(0, _flex.flexFlow)('row')};
  ${(0, _size.pageSizeMargin)()};

  align-items: center;
  height: 32px;
`;
const BreadCrumbsContainer = _styledComponents.default.div`
  ${(0, _flex.flexFlow)('row')};
  align-items: center;

  &::before {
    background: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text200)};
    width: 1px;
    height: 20px;
    content: '';
    margin-right: 12px;
  }
`;

const TitleContainer = _styledComponents.default.div(({
  hasAboveContent
}) => (0, _styledComponents.css)`
    ${(0, _flex.flexFlow)('row')};
    ${(0, _size.pageSizeMargin)()};

    align-items: center;
    flex-shrink: 0;
    grid-column: -1 / 1;
    height: ${hasAboveContent ? 48 : 64}px;
    justify-content: space-between;
  `);

exports.TitleContainer = TitleContainer;
const Title = _styledComponents.default.h1`
  ${(0, _typography.typographyFont)(700, _typography.FontSizes.Title1)};

  color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text900)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const PageName = _styledComponents.default.h5`
  ${(0, _size.pageSizeMargin)({
  marginTop: 8,
  marginBottom: -8
})};
  ${(0, _typography.typographyFont)(500, _typography.FontSizes.Title5)};

  color: ${(0, _theme.getThemeColor)(_theme.ThemeColors.Text1000)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const BreadCrumbLink = (0, _styledComponents.default)(_HyperLink.HyperLink)`
  ${(0, _baseStyles.baseHyperLinkStyles)(_theme.ThemeColors.Text500)};

  padding: 6px 2px;
  user-select: none;
  text-decoration: none;
`;
/*
 * Types
 */

/*
 * Components
 */
const PageHeader = props => {
  const {
    actions,
    breadCrumbs,
    children,
    cssOverrides,
    goBack,
    pageName,
    title,
    disableBreadcrumbs,
    ...domProps
  } = props;
  const pageHeaderContainerRef = (0, _react.useRef)();

  const renderBreadCrumbs = () => {
    if (!breadCrumbs) {
      return null;
    }

    return breadCrumbs.map((breadCrumb, key) => [/*#__PURE__*/_react.default.createElement(BreadCrumbLink, {
      to: breadCrumb.path,
      key: key
    }, breadCrumb.title), key !== breadCrumbs.length - 1 && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      icon: "chevron_right",
      size: 12,
      key: key + 'icon'
    })]);
  };

  const hasAboveContent = (!(0, _typeGuards.isNil)(breadCrumbs) || !(0, _typeGuards.isNil)(goBack) || !(0, _typeGuards.isNil)(pageName)) && (0, _typeGuards.isNil)(disableBreadcrumbs);
  return /*#__PURE__*/_react.default.createElement(PageHeaderContainer, _extends({
    cssOverrides: cssOverrides,
    hasAboveContent: hasAboveContent,
    ref: pageHeaderContainerRef
  }, domProps), (!(0, _typeGuards.isNil)(breadCrumbs) || !(0, _typeGuards.isNil)(goBack)) && (0, _typeGuards.isNil)(disableBreadcrumbs) && /*#__PURE__*/_react.default.createElement(PageHeaderNavigation, null, !(0, _typeGuards.isNil)(goBack) && typeof goBack === 'string' ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
    size: _buttonTypes.ButtonSize.Compact,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    passedAs: _BaseLink.BaseLink,
    to: goBack,
    cssOverrides: (0, _styledComponents.css)`
                margin-left: -4px;
                margin-right: 8px;
              `,
    iconLeft: "circle_arrow_left"
  }, "Go Back") : /*#__PURE__*/_react.default.createElement(_Button.Button, {
    size: _buttonTypes.ButtonSize.Compact,
    display: _buttonTypes.ButtonDisplay.Chromeless,
    onClick: goBack,
    cssOverrides: (0, _styledComponents.css)`
                margin-left: -4px;
                margin-right: 8px;
              `,
    iconLeft: "circle_arrow_left"
  }, "Go Back"), breadCrumbs && /*#__PURE__*/_react.default.createElement(BreadCrumbsContainer, null, renderBreadCrumbs())), /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: theme => ({ ...theme,
      [_theme.Mode.Light]: { ...theme[_theme.Mode.Light],
        [_theme.ThemeColors.ActionPrimary]: theme[_theme.ThemeColors.ApplicationPrimary],
        [_theme.ThemeColors.ActionSecondary]: theme[_theme.ThemeColors.ApplicationSecondary]
      }
    })
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, pageName && /*#__PURE__*/_react.default.createElement(PageName, null, pageName), /*#__PURE__*/_react.default.createElement(TitleContainer, {
    hasAboveContent: hasAboveContent
  }, /*#__PURE__*/_react.default.createElement(Title, null, title), actions), children)));
};

exports.PageHeader = PageHeader;