"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderDefaultOptionsList = exports.renderDefaultEmptyState = exports.renderDefaultSelectedItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../helpers/exports");

var _styledComponents2 = _interopRequireWildcard(require("../../helpers/styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _OptionsList = require("./OptionsList");

var _EmptyState = require("../emptyState/EmptyState");

var _List = require("../list/List");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IconButtonContainer = _styledComponents2.default.div`
  ${(0, _exports.visible)(false)}
`;
const StyledSimpleListItem = (0, _styledComponents2.default)(_List.SimpleListItem)`
  padding: 4px 8px;

  ${_List.StyledListItemIcon} {
    color: ${(0, _exports.getColor)(_exports.Colors.Gray54)};
    font-size: 24px;
  }

  &:hover {
    ${IconButtonContainer} {
      ${(0, _exports.visible)(true)}
    }
  }
`;
/**
 * Common use case for rendering a selected item in the `CardList` view mode
 */

var _StyledIconButton = /*#__PURE__*/(0, _styledComponents.default)(_IconButton.IconButton).withConfig({
  displayName: "CardListhelpers___StyledIconButton",
  componentId: "sc-1syxpaa-0"
})(["color:", ";&:hover{color:", ";}"], p => p._css, p => p._css2);

const renderDefaultSelectedItem = ({
  onRemoveItem,
  toIcon,
  toListItem
}) => item => {
  const {
    id,
    primaryText,
    secondaryText
  } = toListItem(item);
  const leftIcon = (0, _typeGuards.isNotNil)(toIcon) ? toIcon(item) : undefined;
  return /*#__PURE__*/_react.default.createElement(StyledSimpleListItem, {
    key: id,
    primaryText: primaryText,
    secondaryText: secondaryText,
    leftIcon: leftIcon
  }, /*#__PURE__*/_react.default.createElement(IconButtonContainer, null, /*#__PURE__*/_react.default.createElement(_StyledIconButton, {
    icon: "cancel",
    display: _buttonTypes.ButtonDisplay.Chromeless,
    onClick: () => onRemoveItem(item),
    _css: (0, _exports.getColor)(_exports.Colors.Gray24),
    _css2: (0, _exports.getColor)(_exports.Colors.Gray54)
  })));
};

exports.renderDefaultSelectedItem = renderDefaultSelectedItem;

var _StyledEmptyState = /*#__PURE__*/(0, _styledComponents.default)(_EmptyState.EmptyState).withConfig({
  displayName: "CardListhelpers___StyledEmptyState",
  componentId: "sc-1syxpaa-1"
})(["height:100%;"]);

const renderDefaultEmptyState = ({
  icon = 'ghost_empty',
  message = "There's no one here but me.",
  isSearchOpen,
  openSearch
}) => /*#__PURE__*/_react.default.createElement(_StyledEmptyState, {
  icon: icon,
  message: message,
  button: isSearchOpen ? undefined : {
    text: 'Add',
    onClick: openSearch
  }
});

exports.renderDefaultEmptyState = renderDefaultEmptyState;

const renderDefaultOptionsList = options => /*#__PURE__*/_react.default.createElement(_OptionsList.OptionsList, {
  options: options
});

exports.renderDefaultOptionsList = renderDefaultOptionsList;