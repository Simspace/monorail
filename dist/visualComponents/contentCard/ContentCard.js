"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireWildcard(require("../../helpers/styled-components"));

var _matchers = require("../../sharedHelpers/matchers");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _Logo = require("../brand/Logo");

var _Cards = require("../cards/Cards");

var _ContentCardHeader = require("./ContentCardHeader");

var _BaseLink = require("../hyperLink/BaseLink");

var _Description = require("./Description");

var _Difficulty = require("./Difficulty");

var _Footer = require("./Footer");

var _Logo2 = require("./Logo");

var _OrgName = require("./OrgName");

var _Title = require("./Title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ContentCard = props => {
  const {
    cssOverrides,
    organization,
    title,
    description,
    difficulty,
    renderFooter
  } = props;
  const matchOnMode = (0, _react.useMemo)(() => (0, _matchers.matchOnI)('mode')(props), [props]);
  const bbCardAsLinkProps = matchOnMode({
    edit: () => ({
      as: 'section'
    }),
    view: p => p.asLink ? {
      as: _BaseLink.BaseLink,
      activeClassName: p.activeClassName,
      activeStyle: p.activeStyle,
      onlyActiveOnIndex: p.onlyActiveOnIndex,
      to: p.to,
      hover: true
    } : {
      as: 'section'
    }
  });
  const headerProps = matchOnMode({
    view: p => ({
      mode: 'view',
      image: O.fromNullable(p.image)
    }),
    edit: p => ({
      mode: 'edit',
      onImageChange: p.onImageChange,
      onRemoveImage: p.onRemoveImage,
      image: p.image
    })
  });
  const logo = matchOnMode({
    view: p => /*#__PURE__*/_react.default.createElement(_Logo2.StaticLogo, {
      logo: (0, _typeGuards.isNotNil)(p.logo) ? p.logo : renderFallbackLogo()
    }),
    edit: p => /*#__PURE__*/_react.default.createElement(_Logo2.EditLogo, {
      logo: p.logo,
      onRemove: p.onRemoveLogo,
      onChange: p.onLogoChange
    })
  });
  const footer = (0, _react.useMemo)(() => {
    if ((0, _typeGuards.isNil)(renderFooter)) {
      return null;
    }

    const content = renderFooter();
    return (0, _typeGuards.isNotNil)(content) ? /*#__PURE__*/_react.default.createElement(_Footer.Footer, null, content) : null;
  }, [renderFooter]);
  return /*#__PURE__*/_react.default.createElement(_Cards.BBCardBackground, _extends({}, bbCardAsLinkProps, {
    cssOverrides: (0, _styledComponents.css)`
        margin: 8px;
        width: 256px;
        ${cssOverrides};
      `
  }), /*#__PURE__*/_react.default.createElement(_ContentCardHeader.ContentCardHeader, headerProps), logo, (0, _typeGuards.isNotNil)(difficulty) && /*#__PURE__*/_react.default.createElement(_Difficulty.Difficulty, {
    difficulty: difficulty
  }), /*#__PURE__*/_react.default.createElement(Main, {
    paddingTop: (0, _typeGuards.isNil)(difficulty) ? 24 : null
  }, (0, _typeGuards.isNotNil)(organization) && /*#__PURE__*/_react.default.createElement(_OrgName.OrgName, null, organization), /*#__PURE__*/_react.default.createElement(_Title.Title, null, title), (0, _typeGuards.isNotNil)(description) && /*#__PURE__*/_react.default.createElement(_Description.Description, null, /*#__PURE__*/_react.default.createElement(_reactTruncate.default, {
    lines: 3
  }, description))), footer);
};

exports.ContentCard = ContentCard;
const Main = _styledComponents.default.main`
  ${(0, _exports.flexFlow)('column')}
  flex-grow: 1;
  padding: ${p => {
  var _p$paddingTop;

  return `${((_p$paddingTop = p.paddingTop) !== null && _p$paddingTop !== void 0 ? _p$paddingTop : 0) + 8}px 16px 4px`;
}};
`;

function renderFallbackLogo() {
  const VariantLogo = (0, _typeGuards.isNil)(__CUSTOMER_VARIANT__) ? _Logo.SimSpaceLogoMark : _Logo.PCTELogoMark;
  return /*#__PURE__*/_react.default.createElement(VariantLogo, null);
}