"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsButtons = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _ActionsMenu = require("../actionsMenu/ActionsMenu");

var _Button = require("../buttons/Button");

var _IconButton = require("../buttons/IconButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const combineActions = (standardActions = [], featuredActions = []) => featuredActions.map(action => ({ ...action,
  featuredAction: true,

  /**
   * Remapping onClick to be able to close the action menu.
   * This wouldn't be necessary if the interfaces were the same
   */
  onClick: parentClick => {
    action.onClick(() => {});
    parentClick();
  }
})).concat(standardActions);

const ActionsButtons = ({
  display,
  document,
  featuredActions,
  iconOnly,
  size,
  standardActions
}) => _react.default.createElement(_react.default.Fragment, null, featuredActions && featuredActions.map(action => iconOnly ? _react.default.createElement(_StyledIconButton, {
  key: `${action.label}-${action.iconName}`,
  icon: action.iconName,
  title: action.label,
  size: size,
  display: display,
  onClick: () => action.onClick(() => {})
}) : _react.default.createElement(_StyledButton, {
  key: `${action.label}-${action.iconName}`,
  size: size,
  display: display,
  iconLeft: action.iconName // hacky because of the onClick type of ActionMenu's menu items
  ,
  onClick: () => action.onClick(() => {})
}, action.label)), standardActions && _react.default.createElement(_ActionsMenu.ActionsMenu, {
  document: document,
  menuItems: combineActions(standardActions, featuredActions)
}));

exports.ActionsButtons = ActionsButtons;

var _StyledIconButton = (0, _styledComponents.default)(_IconButton.IconButton)`margin-right:8px;`;

var _StyledButton = (0, _styledComponents.default)(_Button.Button)`margin-right:8px;`;