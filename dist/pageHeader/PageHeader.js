"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageHeader = exports.TitleContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = require("../buttons/Button");

var _buttonTypes = require("../buttons/buttonTypes");

var _baseStyles = require("../helpers/baseStyles");

var _exports = require("../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../helpers/styled-components"));

var _theme = require("../helpers/theme");

var _BaseLink = require("../hyperLink/BaseLink");

var _HyperLink = require("../hyperLink/HyperLink");

var _Icon = require("../icon/Icon");

var _typeGuards = require("../sharedHelpers/typeGuards");

var _TabBar = require("../tabs/TabBar");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Styles
 */
const PageHeaderContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageHeader__PageHeaderContainer",
  componentId: "sc-1tofzk7-0"
})(({
  cssOverrides,
  hasAboveContent
}) => (0, _styledComponents.css)(["", ";background:", ";flex-shrink:0;overflow:visible;position:relative;z-index:1;&::before{border-bottom:2px solid ", ";background:inherit;bottom:0;content:'';left:0;position:absolute;right:0;top:0;z-index:-5;}", "{padding:0 24px;", ";}", ";"], (0, _exports.flexFlow)('column'), props => (0, _exports.convertHSLAMapToCss)({ ...(0, _theme.getThemeColorBase)(_theme.ThemeColors.ApplicationPrimary)(props),
  l: 98
}), (0, _theme.getThemeColor)(_theme.ThemeColors.ApplicationPrimary), _TabBar.TabBarContainer, !hasAboveContent && (0, _styledComponents.css)(["margin-top:-8px;"]), cssOverrides));

const pageHeaderPadding =
/*#__PURE__*/
(0, _styledComponents.css)(["padding:0 32px;"]);

const PageHeaderNavigation =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageHeader__PageHeaderNavigation",
  componentId: "sc-1tofzk7-1"
})(["", ";", ";align-items:center;height:32px;"], (0, _exports.flexFlow)('row'), pageHeaderPadding);

const BreadCrumbsContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageHeader__BreadCrumbsContainer",
  componentId: "sc-1tofzk7-2"
})(["", ";align-items:center;&::before{background:", ";width:1px;height:20px;content:'';margin-right:12px;}"], (0, _exports.flexFlow)('row'), (0, _theme.getThemeColor)(_theme.ThemeColors.Text200));

const TitleContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageHeader__TitleContainer",
  componentId: "sc-1tofzk7-3"
})(({
  hasAboveContent
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;flex-shrink:0;grid-column:-1 / 1;height:", "px;"], (0, _exports.flexFlow)('row'), pageHeaderPadding, hasAboveContent ? 48 : 64));

exports.TitleContainer = TitleContainer;

const Title =
/*#__PURE__*/
_styledComponents.default.h1.withConfig({
  displayName: "PageHeader__Title",
  componentId: "sc-1tofzk7-4"
})(["", ";color:", ";margin-left:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"], (0, _exports.typography)(700, _exports.FontSizes.Title1), (0, _theme.getThemeColor)(_theme.ThemeColors.Text900));

const PageName =
/*#__PURE__*/
_styledComponents.default.h5.withConfig({
  displayName: "PageHeader__PageName",
  componentId: "sc-1tofzk7-5"
})(["", ";", ";color:", ";margin:8px 0 -8px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"], pageHeaderPadding, (0, _exports.typography)(500, _exports.FontSizes.Title5), (0, _theme.getThemeColor)(_theme.ThemeColors.Text1000));

const BreadCrumbLink =
/*#__PURE__*/
(0, _styledComponents.default)(_HyperLink.HyperLink).withConfig({
  displayName: "PageHeader__BreadCrumbLink",
  componentId: "sc-1tofzk7-6"
})(["", ";padding:6px 2px;user-select:none;text-decoration:none;"], (0, _baseStyles.baseHyperLinkStyles)(_theme.ThemeColors.Text500));
/*
 * Types
 */

/*
 * Components
 */
class PageHeader extends _react.Component {
  constructor(...args) {
    super(...args);
    this.pageHeaderContainerRef = (0, _react.createRef)();

    this.renderBreadCrumbs = () => {
      const {
        breadCrumbs
      } = this.props;

      if (!breadCrumbs) {
        return null;
      }

      return breadCrumbs.map(({
        title,
        path
      }, key) => [_react.default.createElement(BreadCrumbLink, {
        to: path,
        key: key
      }, title), key !== breadCrumbs.length - 1 && _react.default.createElement(_Icon.Icon, {
        icon: "chevron_right",
        size: 12,
        key: key + 'icon'
      })]);
    };
  }

  render() {
    const {
      actions,
      breadCrumbs,
      children,
      cssOverrides,
      goBack,
      pageName,
      title,
      ...domProps
    } = this.props;
    const hasAboveContent = !(0, _typeGuards.isNil)(breadCrumbs) || !(0, _typeGuards.isNil)(goBack);
    return _react.default.createElement(PageHeaderContainer, _extends({
      cssOverrides: cssOverrides,
      hasAboveContent: hasAboveContent,
      ref: this.pageHeaderContainerRef
    }, domProps), (!(0, _typeGuards.isNil)(breadCrumbs) || !(0, _typeGuards.isNil)(goBack)) && _react.default.createElement(PageHeaderNavigation, null, !(0, _typeGuards.isNil)(goBack) && typeof goBack === 'string' ? _react.default.createElement(_Button.Button, {
      size: _buttonTypes.ButtonSize.Compact,
      display: _buttonTypes.ButtonDisplay.Chromeless,
      as: _BaseLink.BaseLink,
      to: goBack,
      cssOverrides: (0, _styledComponents.css)(["margin-left:-4px;margin-right:8px;"]),
      iconLeft: "circle_arrow_left"
    }, "Go Back") : _react.default.createElement(_Button.Button, {
      size: _buttonTypes.ButtonSize.Compact,
      display: _buttonTypes.ButtonDisplay.Chromeless,
      onClick: goBack,
      cssOverrides: (0, _styledComponents.css)(["margin-left:-4px;margin-right:8px;"]),
      iconLeft: "circle_arrow_left"
    }, "Go Back"), breadCrumbs && _react.default.createElement(BreadCrumbsContainer, null, this.renderBreadCrumbs())), pageName && _react.default.createElement(PageName, null, pageName), _react.default.createElement(TitleContainer, {
      hasAboveContent: hasAboveContent
    }, _react.default.createElement(Title, null, title), actions), children);
  }

}

exports.PageHeader = PageHeader;