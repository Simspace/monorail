"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsButtons = exports.ActionButton = exports.CatalogEntryPermission = void 0;

var _Array = require("fp-ts/lib/Array");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _ActionsMenu = require("../actionsMenu/ActionsMenu");

var _Button = require("../buttons/Button");

var _DropdownButton = require("../buttons/DropdownButton");

var _IconButton = require("../buttons/IconButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CatalogEntryPermission;
exports.CatalogEntryPermission = CatalogEntryPermission;

(function (CatalogEntryPermission) {
  CatalogEntryPermission["Delete"] = "delete";
  CatalogEntryPermission["List"] = "list";
  CatalogEntryPermission["Read"] = "read";
  CatalogEntryPermission["Write"] = "write";
})(CatalogEntryPermission || (exports.CatalogEntryPermission = CatalogEntryPermission = {}));

let ActionButton;
exports.ActionButton = ActionButton;

(function (ActionButton) {
  ActionButton["TextButton"] = "TEXT_BUTTON";
  ActionButton["IconButton"] = "ICON_BUTTON";
  ActionButton["ActionsMenu"] = "ACTIONS_MENU";
  ActionButton["DropdownButton"] = "DROPDOWN_BUTTON";
})(ActionButton || (exports.ActionButton = ActionButton = {}));

const ActionsButtonsBox =
/*#__PURE__*/
_styledComponents.default.div.withConfig({
  displayName: "ActionsButtons__ActionsButtonsBox",
  componentId: "sc-1sqcecj-0"
})(["display:flex;> *{margin-left:8px;}"]);

const makeTextButton = ({
  action,
  size,
  display
}) => action.check ? _react.default.createElement(_Button.Button, {
  key: `${action.actionProps.label}-${action.actionProps.iconLeft}`,
  size: size,
  display: display,
  iconLeft: action.actionProps.iconLeft,
  onClick: action.actionProps.onClick,
  disabled: action.actionProps.disabled
}, action.actionProps.label) : null;

const makeIconButton = ({
  action,
  size,
  display
}) => {
  var _action$actionProps$i;

  if (action.check) {
    switch (action.type) {
      case ActionButton.IconButton:
        return _react.default.createElement(_IconButton.IconButton, {
          key: `${action.actionProps.icon}`,
          icon: (_action$actionProps$i = action.actionProps.icon) !== null && _action$actionProps$i !== void 0 ? _action$actionProps$i : '',
          size: size,
          display: display,
          onClick: action.actionProps.onClick,
          disabled: action.actionProps.disabled
        });

      case ActionButton.TextButton:
        const icon = (0, _typeGuards.isNil)(action.actionProps.iconLeft) ? action.actionProps.iconRight : action.actionProps.iconLeft;
        return _react.default.createElement(_IconButton.IconButton, {
          key: `${icon}`,
          icon: icon !== null && icon !== void 0 ? icon : '',
          size: size,
          display: display,
          onClick: action.actionProps.onClick,
          disabled: action.actionProps.disabled
        });

      default:
        return null;
    }
  } else {
    return null;
  }
};

const makeDropdownButton = action => {
  const accessibleListItems = action.actionProps.listItems.filter(action_ => action_.check);
  return (0, _Array.isEmpty)(accessibleListItems) ? null : _react.default.createElement(_DropdownButton.DropdownButton, {
    listItems: accessibleListItems.map(listItem => listItem.actionProps),
    disabled: action.actionProps.disabled
  });
};

const ActionsMenu_ = ({
  action,
  document
}) => {
  const accessibleActions = action.actionProps.actions.filter(action_ => action_.check);
  return (0, _Array.isEmpty)(accessibleActions) ? null : _react.default.createElement(_ActionsMenu.ActionsMenu, {
    actions: accessibleActions.map(action_ => action_.actionProps)
  });
};

const ActionsButtons = ({
  display,
  document,
  iconOnly,
  size,
  actions = []
}) => {
  const {
    textButtons,
    iconButtons,
    dropdownButtons,
    actionsMenus
  } = actions.reduce((acc, action, idx) => {
    switch (action.type) {
      case ActionButton.TextButton:
        if ((0, _typeGuards.isFalsy)(iconOnly)) {
          const textButton = makeTextButton({
            action,
            size,
            display
          });
          return (0, _typeGuards.isNil)(textButton) ? acc : { ...acc,
            textButtons: [...acc.textButtons, textButton]
          };
        } else {
          const textButtonIconOnly = makeIconButton({
            action,
            size,
            display
          });
          return (0, _typeGuards.isNil)(textButtonIconOnly) ? acc : { ...acc,
            iconButtons: [...acc.iconButtons, textButtonIconOnly]
          };
        }

      case ActionButton.IconButton:
        const iconButton = makeIconButton({
          action,
          size,
          display
        });
        return (0, _typeGuards.isNil)(iconButton) ? acc : { ...acc,
          iconButtons: [...acc.iconButtons, iconButton]
        };

      case ActionButton.DropdownButton:
        const dropdownButton = makeDropdownButton(action);
        return (0, _typeGuards.isNil)(dropdownButton) ? acc : { ...acc,
          dropdownButtons: [...acc.dropdownButtons, dropdownButton]
        };

      case ActionButton.ActionsMenu:
        const actionsMenu = _react.default.createElement(ActionsMenu_, {
          key: idx,
          action: action,
          document: document
        });

        return (0, _typeGuards.isNil)(actionsMenu) ? acc : { ...acc,
          actionsMenus: [...acc.actionsMenus, actionsMenu]
        };
    }
  }, {
    textButtons: [],
    iconButtons: [],
    dropdownButtons: [],
    actionsMenus: []
  });
  return _react.default.createElement(ActionsButtonsBox, null, textButtons, iconButtons, dropdownButtons, actionsMenus);
};

exports.ActionsButtons = ActionsButtons;