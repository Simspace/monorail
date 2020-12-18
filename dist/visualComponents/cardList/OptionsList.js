"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsList = exports.renderIconListItem = exports.renderDefaultListItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _function = require("fp-ts/lib/function");

var O = _interopRequireWildcard(require("fp-ts/lib/Option"));

var _pipeable = require("fp-ts/lib/pipeable");

var RNEA = _interopRequireWildcard(require("fp-ts/lib/ReadonlyNonEmptyArray"));

var _exports = require("../../helpers/exports");

var _styledComponents = _interopRequireDefault(require("../../helpers/styled-components"));

var _DataStates = require("../dataStates/DataStates");

var _Icon = require("../icon/Icon");

var _Choice = require("../inputs/Choice");

var _List = require("../list/List");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const ListItemContainer = _styledComponents.default.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
`;
const ListItemTextRow = (0, _styledComponents.default)(_List.ListItemText)`
  margin-left: 4px;
  width: 100%;
`;
const StyledChoice = (0, _styledComponents.default)(_Choice.Choice)`
  ${_Icon.Icon} {
    left: 16px;
  }

  ${_DataStates.IconBox} {
    height: 80px;
    width: 80px;
  }

  ${_DataStates.Banner} {
    color: ${(0, _exports.getColor)(_exports.Colors.Black89a)};

    ${(0, _exports.typography)(400, _exports.FontSizes.Title2, '24px auto')}
  }
`;
const StyledCustomNoData = (0, _styledComponents.default)(_DataStates.CustomNoData)`
  height: 100%;
  ${(0, _exports.flexFlow)('column')}
  place-items: center;

  ${_DataStates.IconBox} {
    height: 56px;
    width: 56px;
  }
  ${_DataStates.Banner} {
    color: ${(0, _exports.getColor)(_exports.Colors.Black54a)};

    ${(0, _exports.typography)(400, _exports.FontSizes.Title5)}
    margin-top: 12px;
  }
`;

const RenderChoice = ({
  item,
  disabled,
  type,
  onChange,
  handleClick = _function.constVoid,
  checked,
  id,
  primaryText,
  secondaryText,
  children
}) => /*#__PURE__*/_react.default.createElement(StyledChoice, {
  disabled: disabled,
  key: id,
  type: type,
  centeredInput: true,
  checked: checked,
  onClick: () => handleClick(item),
  onChange: onChange
}, children({
  id,
  primaryText,
  secondaryText
}));

const renderDefaultListItem = props => /*#__PURE__*/_react.default.createElement(ListItemTextRow, null, /*#__PURE__*/_react.default.createElement(_List.ListItemPrimaryText, {
  title: props.primaryText
}, props.primaryText), /*#__PURE__*/_react.default.createElement(_List.ListItemSecondaryText, null, props.secondaryText));

exports.renderDefaultListItem = renderDefaultListItem;

const renderIconListItem = props => /*#__PURE__*/_react.default.createElement(ListItemContainer, null, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
  size: 22,
  icon: props.iconName
}), /*#__PURE__*/_react.default.createElement(ListItemTextRow, null, /*#__PURE__*/_react.default.createElement(_List.ListItemPrimaryText, {
  title: props.primaryText
}, props.primaryText), /*#__PURE__*/_react.default.createElement(_List.ListItemSecondaryText, null, props.secondaryText)));

exports.renderIconListItem = renderIconListItem;

const OptionsList = ({
  noDataHeading = 'No Results Found',
  options,
  renderListItem = renderDefaultListItem
}) => (0, _pipeable.pipe)(options, RNEA.fromReadonlyArray, O.fold(() => /*#__PURE__*/_react.default.createElement(StyledCustomNoData, {
  headingText: noDataHeading,
  details: []
}), nonEmptyOptions => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, nonEmptyOptions.map(choiceProps => /*#__PURE__*/_react.default.createElement(RenderChoice, _extends({
  key: choiceProps.id
}, choiceProps), renderListItem)))));

exports.OptionsList = OptionsList;