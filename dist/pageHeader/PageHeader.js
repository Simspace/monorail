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
const PageHeaderContainer = (0, _styledComponents.default)('div')`
  ${(0, _CommonStyles.flexFlow)('column')};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  flex-shrink: 0;

  /* Instead of hiding overflow errors, let's see them and fix them. This was causing buttons to be hidden in error. */
  overflow: visible;

  position: relative; /* Has this so that the shadow goes over the content below it. */
  z-index: 1; /* Has this so that the shadow goes over the content below it. */

  &::before {
    ${({
  flush
}) => flush && _styledComponents.css`
        border-bottom: 1px solid ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Grey94)};
      `};

    background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
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

    ${({
  hasAboveContent
}) => !hasAboveContent && _styledComponents.css`
        margin-top: -8px;
      `};
  }

  ${({
  css: cssOverrides
}) => cssOverrides};
`;
const pageHeaderPadding = _styledComponents.css`
  padding: 0 32px;
`;
const PageHeaderShadow = _styledComponents.default.div`
  ${(0, _CommonStyles.getElevation)(_CommonStyles.ElevationRange.Elevation6)};

  background: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.White)};
  bottom: 6px;
  content: '';
  left: -2px;
  position: absolute;
  right: -2px;
  top: 0;
  z-index: -10;

  ${({
  willAnimateShadow,
  flush
}) => (flush || willAnimateShadow) && _styledComponents.css`
      opacity: 0;
    `};
`;
const BreadCrumbsContainer = _styledComponents.default.div`
  ${(0, _CommonStyles.flexFlow)('row')};
  ${pageHeaderPadding};

  align-items: center;
  height: 32px;
`;
const BreadCrumb = _styledComponents.default.a`
  ${(0, _CommonStyles.typography)(500, _CommonStyles.FontSizes.Title5)};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.Black54)};
  cursor: pointer;
  padding: 6px 2px;
  text-transform: none;
  user-select: none;

  &:hover {
    color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandLightBlue)};
  }
`;
const TitleContainer = _styledComponents.default.div`
  ${({
  hasAboveContent
}) => _styledComponents.css`
    ${(0, _CommonStyles.flexFlow)('row')};
    ${pageHeaderPadding};

    align-items: center;
    flex-shrink: 0;
    grid-column: -1 / 1;
    height: ${hasAboveContent ? 48 : 64}px;
  `};
`;
exports.TitleContainer = TitleContainer;
const Title = (0, _styledComponents.default)('h1')`
  ${(0, _CommonStyles.typography)(700, _CommonStyles.FontSizes.Title1)};

  color: ${(0, _CommonStyles.colors)(_CommonStyles.Colors.BrandDarkBlue)};
  margin-left: 0;
  white-space: nowrap;
`;
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
      css: overrideCss,
      flush,
      goBack,
      shadowRef,
      title,
      willAnimateShadow
    } = this.props;
    const hasAboveContent = !(0, _primitiveGuards.isNil)(breadCrumbs) || !(0, _primitiveGuards.isNil)(goBack);
    return _react.default.createElement(PageHeaderContainer, {
      css: _styledComponents.css`
          ${overrideCss};
        `,
      hasAboveContent: hasAboveContent,
      ref: this.pageHeaderContainerRef,
      flush: flush
    }, (!(0, _primitiveGuards.isNil)(breadCrumbs) || !(0, _primitiveGuards.isNil)(goBack)) && _react.default.createElement(BreadCrumbsContainer, null, goBack && _react.default.createElement(_Button.Button, {
      size: _buttonTypes.ButtonSize.Compact,
      display: _buttonTypes.ButtonDisplay.Chromeless,
      onClick: goBack,
      css: _styledComponents.css`
                  margin-left: -4px;
                `
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