"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemIcon = exports.StyledListItemIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents = _interopRequireDefault(require("../../../helpers/styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//#region CSS
const StyledListItemIcon = (0, _styledComponents.default)( // eslint-disable-next-line @typescript-eslint/no-use-before-define
MUI.ListItemIcon // as-cast necessary in order to allow for additional Monorail pass-through props
)`
  font-size: 16px;
`; //#endregion

exports.StyledListItemIcon = StyledListItemIcon;

/**
 * Icon actions within Lists
 * @link https://material-ui.com/components/lists/
 */
const ListItemIcon = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/_react.default.createElement(StyledListItemIcon, _extends({
    ref: ref
  }, props));
});

exports.ListItemIcon = ListItemIcon;
ListItemIcon.muiName = MUI.ListItemIcon.muiName; // eslint-disable-line