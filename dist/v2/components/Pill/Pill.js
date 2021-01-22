"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pill = exports.PillAdornment = exports.ADORNMENT_POSITION = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents2 = _interopRequireWildcard(require("../../../helpers/styled-components"));

var _Text = require("../../../visualComponents/typography/Text");

var _exports = require("../../../helpers/exports");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ADORNMENT_POSITION = {
  Start: 'start',
  End: 'end'
};
exports.ADORNMENT_POSITION = ADORNMENT_POSITION;
//#region Styles
const StyledPill = _styledComponents2.default.div`
  display: flex;
  align-items: center;
  background-color: ${({
  theme
}) => theme.v2.FoundationSmidgen};
  padding: 8px 16px;
  border-radius: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const adornmentPositionCss = {
  [ADORNMENT_POSITION.Start]: (0, _styledComponents2.css)`
    margin-left: -8px;
    padding-right: 8px;
  `,
  [ADORNMENT_POSITION.End]: (0, _styledComponents2.css)`
    margin-right: -8px;
    padding-left: 8px;
  `
};
const StyledPillAdornment = _styledComponents2.default.div`
  ${({
  position
}) => adornmentPositionCss[position]}

  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({
  theme
}) => theme.v2.FoundationText4};
`; //#endregion Styles
//#region Components
//#region PillAdornment

/**
 * Adornment wrapper for Pill that handles start/end icon placement
 */
const PillAdornment = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(StyledPillAdornment, _extends({
    ref: ref
  }, props));
}); //#endregion PillAdornment
//#region Pill


exports.PillAdornment = PillAdornment;

var _StyledText = /*#__PURE__*/(0, _styledComponents.default)(_Text.Text).withConfig({
  displayName: "Pill___StyledText",
  componentId: "sc-1qwogpb-0"
})(["flex:1;"]);

/**
 * Pill is a styled wrapper of text and start/end icons
 */
const Pill = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    label,
    ...restProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(StyledPill, _extends({
    title: typeof label === 'string' ? label : undefined,
    ref: ref
  }, restProps), props.startAdornment, /*#__PURE__*/_react.default.createElement(_StyledText, {
    noWrap: true,
    fontSize: _exports.FontSizes.Title5,
    fontWeight: _exports.FontWeights.Book
  }, label), props.endAdornment);
}); //#endregion Pill
//#endregion Components


exports.Pill = Pill;