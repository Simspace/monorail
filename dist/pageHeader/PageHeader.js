"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageHeader = exports.TitleContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _CommonStyles = require("../CommonStyles");

var _Icon = require("../icon/Icon");

var _buttonTypes = require("../buttons/buttonTypes");

var _primitiveGuards = require("../CoreUtils/primitive-guards");

var _Button = require("../buttons/Button");

var _TabBar = require("../tabs/TabBar");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*
* Styles
*/
const PageHeaderContainer =
/*#__PURE__*/
(0, _styledComponents.default)('div').withConfig({
  displayName: "PageHeader__PageHeaderContainer",
  componentId: "sc-1tofzk7-0"
})(["", ";background:", ";flex-shrink:0;overflow:visible;position:relative;z-index:1;&::before{", ";background:", ";bottom:0;content:'';left:0;position:absolute;right:0;top:0;z-index:-5;}", "{padding:0 24px;", ";}", ";"], (0, _CommonStyles.flexFlow)('column'), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), ({
  flush
}) => flush && (0, _styledComponents.css)(["border-bottom:1px solid ", ";"], (0, _CommonStyles.colors)(_CommonStyles.Colors.Grey94)), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), _TabBar.TabBarContainer, ({
  hasAboveContent
}) => !hasAboveContent && (0, _styledComponents.css)(["margin-top:-8px;"]), ({
  cssOverrides
}) => cssOverrides);
const pageHeaderPadding =
/*#__PURE__*/
(0, _styledComponents.css)(["padding:0 32px;"]);

const PageHeaderShadow =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageHeader__PageHeaderShadow",
  componentId: "sc-1tofzk7-1"
})(["", ";background:", ";bottom:6px;content:'';left:-2px;position:absolute;right:-2px;top:0;z-index:-10;", ";"], (0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation6), (0, _CommonStyles.colors)(_CommonStyles.Colors.White), ({
  willAnimateShadow,
  flush
}) => (flush || willAnimateShadow) && (0, _styledComponents.css)(["opacity:0;"]));

const BreadCrumbsContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageHeader__BreadCrumbsContainer",
  componentId: "sc-1tofzk7-2"
})(["", ";", ";align-items:center;height:32px;"], (0, _CommonStyles.flexFlow)('row'), pageHeaderPadding);

const BreadCrumb =
/*#__PURE__*/
_styledComponents.default.a.withConfig({
  displayName: "PageHeader__BreadCrumb",
  componentId: "sc-1tofzk7-3"
})(["", ";color:", ";cursor:pointer;padding:6px 2px;text-transform:none;user-select:none;&:hover{color:", ";}"], (0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5), (0, _CommonStyles.colors)(_CommonStyles.Colors.Black54), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue));

const TitleContainer =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "PageHeader__TitleContainer",
  componentId: "sc-1tofzk7-4"
})(["", ";"], ({
  hasAboveContent
}) => (0, _styledComponents.css)(["", ";", ";align-items:center;flex-shrink:0;grid-column:-1 / 1;height:", "px;"], (0, _CommonStyles.flexFlow)('row'), pageHeaderPadding, hasAboveContent ? 48 : 64));

exports.TitleContainer = TitleContainer;
const Title =
/*#__PURE__*/
(0, _styledComponents.default)('h1').withConfig({
  displayName: "PageHeader__Title",
  componentId: "sc-1tofzk7-5"
})(["", ";color:", ";margin-left:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"], (0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title1), (0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue));
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
      }, key) => [_react.default.createElement(BreadCrumb, {
        onClick: path,
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
      action,
      breadCrumbs,
      children,
      cssOverrides,
      flush,
      goBack,
      shadowRef,
      title,
      willAnimateShadow
    } = this.props;
    const hasAboveContent = !(0, _primitiveGuards.isNil)(breadCrumbs) || !(0, _primitiveGuards.isNil)(goBack);
    return _react.default.createElement(PageHeaderContainer, {
      cssOverrides: (0, _styledComponents.css)(["", ";"], cssOverrides),
      hasAboveContent: hasAboveContent,
      ref: this.pageHeaderContainerRef,
      flush: flush
    }, (!(0, _primitiveGuards.isNil)(breadCrumbs) || !(0, _primitiveGuards.isNil)(goBack)) && _react.default.createElement(BreadCrumbsContainer, null, goBack && _react.default.createElement(_Button.Button, {
      size: _buttonTypes.ButtonSize.Compact,
      display: _buttonTypes.ButtonDisplay.Chromeless,
      onClick: goBack,
      cssOverrides: (0, _styledComponents.css)(["margin-left:-4px;"])
    }, _react.default.createElement(_Icon.Icon, {
      icon: "circle_arrow_left"
    }), "Go Back"), this.renderBreadCrumbs()), _react.default.createElement(TitleContainer, {
      hasAboveContent: hasAboveContent
    }, _react.default.createElement(Title, null, title), action), children, _react.default.createElement(PageHeaderShadow, {
      willAnimateShadow: willAnimateShadow,
      flush: flush,
      ref: shadowRef
    }));
  }

}

exports.PageHeader = PageHeader;
PageHeader.defaultProps = {
  willAnimateShadow: false,
  flush: false
};