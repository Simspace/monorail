"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = Link;
exports.LinkUnstyled = LinkUnstyled;
exports.StyledLink = exports.BaseRRLinkWithPropDenylist = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents2 = _interopRequireWildcard(require("../../../helpers/styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// #region CSS
const routerLinkUnstyled = (0, _styledComponents2.css)`
  color: inherit;
  font-weight: 300;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: inherit;
  }
`; // #endregion CSS

/**
 * Due to typing confusion, RRLinkProps needs to omit HTML props, since they exist already on MUI and cause issues.
 */

const propAllowList = ['activeClassName', 'activeStyle', 'innerRef', 'to', 'onlyActiveOnIndex'];

/**
 * Create an empty styled-component that wraps RRLink and leverages defaultValidatorFn to only allow valid HTML attrs.
 * This is useful, since RRLink doesn't do this by default, and will pass along any custom props we or MUI have, causing
 * sadness. DS 2020-09-30
 *
 * Please try to avoid using this component directly.
 */
const BaseRRLinkWithPropDenylist = (0, _styledComponents2.default)(_reactRouter.Link).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => propAllowList.includes(prop) || defaultValidatorFn(prop)
})``;
exports.BaseRRLinkWithPropDenylist = BaseRRLinkWithPropDenylist;
const StyledLink = (0, _styledComponents2.default)(MUI.Link // as-cast necessary in order to allow for additional Monorail pass-through props
)``;
exports.StyledLink = StyledLink;

/**
 * Internal link that leverages react-router `Link`.
 *
 * TODO: This should accept some kind of `external` prop and compose TBD `InternalLink` + `ExternalLink`
 */
function Link(props) {
  const bannedPropsDefaults = {
    component: BaseRRLinkWithPropDenylist,
    underline: 'always'
  };
  return /*#__PURE__*/_react.default.createElement(StyledLink, _extends({}, bannedPropsDefaults, props));
}

var _StyledLink = /*#__PURE__*/(0, _styledComponents.default)(Link).withConfig({
  displayName: "RouterLink___StyledLink",
  componentId: "sc-1kxb4tf-0"
})(["", ""], routerLinkUnstyled);

;
Link.muiName = MUI.Link.muiName; // eslint-disable-line

/**
 * Removes text styling, inherits font color
 */

function LinkUnstyled(props) {
  return /*#__PURE__*/_react.default.createElement(_StyledLink, props);
}

;
LinkUnstyled.muiName = MUI.Link.muiName; // eslint-disable-line