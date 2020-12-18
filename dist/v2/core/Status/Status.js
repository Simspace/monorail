"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = Status;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents2 = _interopRequireDefault(require("../../../helpers/styled-components"));

var _typeGuards = require("../../../sharedHelpers/typeGuards");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// #region CSS
const StyledChip = (0, _styledComponents2.default)(MUI.Chip // as-cast necessary in order to allow for additional Monorail pass-through props
) // prevent passing Monorail props that are identically named as Material UI
// .withConfig({
//   shouldForwardProp: prop => prop !== 'size',
// })
// Provide defaults
.attrs(props => ({// display: props.display ?? 'primary',
  // size: props.size ?? 'default',
}))``; // #endregion CSS

var _StyledSpan = /*#__PURE__*/(0, _styledComponents.default)("span").withConfig({
  displayName: "Status___StyledSpan",
  componentId: "sc-1s0b7ra-0"
})(["display:inline-flex;font-size:22px;color:inherit;"]);

/**
 * Badge-like display, usually for numerical display
 */
function Status(props) {
  const {
    icon,
    ...restProps
  } = props;
  const wrappedIcon = (0, _typeGuards.isNotNil)(icon) ? /*#__PURE__*/_react.default.createElement(_StyledSpan, null, icon) : undefined;
  return /*#__PURE__*/_react.default.createElement(StyledChip, _extends({
    icon: wrappedIcon
  }, restProps));
}

;
Status.muiName = MUI.Chip.muiName; // eslint-disable-line