"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = exports.UnstyledListItem = exports.StyledListItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var MUI = _interopRequireWildcard(require("@material-ui/core"));

var _styledComponents2 = _interopRequireDefault(require("../../../helpers/styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//#region CSS
const StyledListItem = (0, _styledComponents2.default)( // eslint-disable-next-line @typescript-eslint/no-use-before-define
MUI.ListItem // as-cast necessary in order to allow for additional Monorail pass-through props
)``; //#endregion CSS

exports.StyledListItem = StyledListItem;

const UnstyledListItem = props => {
  return /*#__PURE__*/_react.default.createElement(_StyledListItem, _extends({
    disableGutters: true
  }, props));
};

exports.UnstyledListItem = UnstyledListItem;
UnstyledListItem.muiName = MUI.ListItem.muiName; // eslint-disable-line

var _StyledLi = /*#__PURE__*/(0, _styledComponents.default)("li").withConfig({
  displayName: "ListItem___StyledLi",
  componentId: "h1s9gw-0"
})(["position:relative;"]);

/**
 * Items within Lists
 * @link https://material-ui.com/components/lists/
 */
const ListItem = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const { ...restProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_StyledLi, null, /*#__PURE__*/_react.default.createElement(StyledListItem // Use a div (instead of li) for secondaryAction container since we always wrap with <li>
  , _extends({
    ContainerComponent: "div",
    ref: ref
  }, restProps)));
});

exports.ListItem = ListItem;

var _StyledListItem = /*#__PURE__*/(0, _styledComponents.default)(ListItem).withConfig({
  displayName: "ListItem___StyledListItem",
  componentId: "h1s9gw-1"
})(["min-height:unset;padding:0;margin:0;width:inherit;"]);

ListItem.muiName = MUI.ListItem.muiName; // eslint-disable-line