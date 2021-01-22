"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = Header;
exports.HeaderAdornment = exports.StyledHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../../helpers/exports");

var _styledComponents2 = _interopRequireDefault(require("../../../helpers/styled-components"));

var _typeGuards = require("../../../sharedHelpers/typeGuards");

var _Text = require("../../../visualComponents/typography/Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// #region CSS
const StyledHeader = _styledComponents2.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({
  theme
}) => theme.v2.FoundationText1};
  flex-shrink: 0;
  height: 48px;
  padding: 0 16px;

  ${({
  hideBorder,
  theme
}) => !hideBorder && `box-shadow: inset 0 -1px 0 ${theme.v2.FoundationDash};`}
`;
exports.StyledHeader = StyledHeader;
const ADORNMENT_MARGIN = '12px';
const HeaderAdornment = _styledComponents2.default.div`
  font-size: 16px; /* default size for header icons */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({
  theme
}) => theme.v2.FoundationText4};

  ${({
  position
}) => position === 'start' ? `margin-right: ${ADORNMENT_MARGIN};` : position === 'end' ? `margin-left: ${ADORNMENT_MARGIN};` : (0, _typeGuards.assertNever)(position)}
`; // #endregion CSS

exports.HeaderAdornment = HeaderAdornment;

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "Header___StyledText",
  componentId: "wq0xh7-0"
})(["flex:1;", ""], p => p._css);

/**
 * Styled header with support for start/end adornments
 *
 * TODO: It may make sense to default `<Text as="h2"/>` -DS 2020-11-05
 */
function Header(props) {
  const {
    hideBorder,
    startAdornment,
    endAdornment,
    TitleTextProps,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(StyledHeader, _extends({
    hideBorder: hideBorder
  }, restProps), startAdornment, /*#__PURE__*/_react.default.createElement(_StyledText, _extends({
    fontSize: _exports.FontSizes.Title3,
    fontWeight: _exports.FontWeights.Medium,
    noWrap: true
  }, TitleTextProps, {
    _css: TitleTextProps === null || TitleTextProps === void 0 ? void 0 : TitleTextProps.css
  }), children), endAdornment);
}