"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsButtons = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Array = require("fp-ts/lib/Array");

var _Either = require("fp-ts/lib/Either");

var _function = require("fp-ts/lib/function");

var _react = _interopRequireDefault(require("react"));

var _Array2 = require("../../sharedHelpers/fp-ts-ext/Array");

var _ActionsMenu = require("../actionsMenu/ActionsMenu");

var _Button = require("../buttons/Button");

var _IconButton = require("../buttons/IconButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const ActionsButtons = ({
  display,
  document,
  iconOnly,
  size,
  actions = []
}) => {
  const {
    left: standardActions,
    right: featuredActions
  } = (0, _function.pipe)((0, _Array2.map)(action => action.isFeaturedAction ? (0, _Either.right)(iconOnly ? _react.default.createElement(_StyledIconButton, {
    key: `${action.label}-${action.iconName}`,
    icon: action.iconName,
    title: action.label,
    size: size,
    display: display,
    onClick: () => action.onClick(() => {}),
    _css: actions.length > 1 && `margin-right: 8px;`
  }) : _react.default.createElement(_StyledButton, {
    key: `${action.label}-${action.iconName}`,
    size: size,
    display: display,
    iconLeft: action.iconName // hacky because of the onClick type of ActionMenu's menu items
    ,
    onClick: () => action.onClick(() => {}),
    _css2: actions.length > 1 && `margin-right: 8px;`
  }, action.label)) : (0, _Either.left)(action)), _Array.array.separate)(actions);
  return _react.default.createElement(_react.default.Fragment, null, featuredActions, standardActions && _react.default.createElement(_ActionsMenu.ActionsMenu, {
    document: document,
    actions: standardActions
  }));
};

exports.ActionsButtons = ActionsButtons;

var _StyledIconButton = (0, _styledComponents.default)(_IconButton.IconButton)`${p => p._css}`;

var _StyledButton = (0, _styledComponents.default)(_Button.Button)`${p => p._css2}`;