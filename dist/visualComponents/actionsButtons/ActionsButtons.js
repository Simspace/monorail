"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeActionsMenuAction = exports.makeActionsMenuListItem = exports.makeTextButtonAction = exports.ActionsButtons = exports.ActionButton = exports.CatalogEntryPermission = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Array = require("fp-ts/lib/Array");

var _color = require("../../helpers/color");

var _typeGuards = require("../../sharedHelpers/typeGuards");

var _ActionsMenu = require("../actionsMenu/ActionsMenu");

var _Button = require("../buttons/Button");

var _DropdownButton = require("../buttons/DropdownButton");

var _IconButton = require("../buttons/IconButton");

var _Icon = require("../icon/Icon");

var _Tooltip = require("../tooltips/Tooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * CatalogEntryPermission is coppied from
 * src/catalog/shared/state/catalogStateTypes.ts
 */
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
  ActionButton["InfoButton"] = "INFO_BUTTON";
})(ActionButton || (exports.ActionButton = ActionButton = {}));

const ActionsButtonsBox = /*#__PURE__*/_styledComponents.default.div.withConfig({
  displayName: "ActionsButtons__ActionsButtonsBox",
  componentId: "sc-1sqcecj-0"
})(["display:flex;> *{margin-left:8px;}"]);

const makeTextButton = ({
  action,
  size,
  display
}) => action.check ? /*#__PURE__*/_react.default.createElement(_Button.Button, {
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
        return /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
          key: `${action.actionProps.icon}`,
          icon: (_action$actionProps$i = action.actionProps.icon) !== null && _action$actionProps$i !== void 0 ? _action$actionProps$i : '',
          size: size,
          display: display,
          onClick: action.actionProps.onClick,
          disabled: action.actionProps.disabled
        });

      case ActionButton.TextButton:
        const icon = (0, _typeGuards.isNil)(action.actionProps.iconLeft) ? action.actionProps.iconRight : action.actionProps.iconLeft;
        return /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
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
  return (0, _Array.isEmpty)(accessibleListItems) ? null : /*#__PURE__*/_react.default.createElement(_DropdownButton.DropdownButton, {
    listItems: accessibleListItems.map(listItem => listItem.actionProps),
    disabled: action.actionProps.disabled
  });
};

var _StyledSpan = /*#__PURE__*/(0, _styledComponents.default)("span").withConfig({
  displayName: "ActionsButtons___StyledSpan",
  componentId: "sc-1sqcecj-1"
})(["margin-top:4px;"]);

const makeInfoButton = action => {
  return /*#__PURE__*/_react.default.createElement(_Tooltip.TooltipMonorail, {
    key: action.actionProps.info,
    label: action.actionProps.info
  }, /*#__PURE__*/_react.default.createElement(_StyledSpan, null, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "info",
    color: _color.Colors.Black54a
  })));
};

const ActionsMenu_ = ({
  action,
  document
}) => {
  const accessibleActions = action.actionProps.actions.filter(action_ => action_.check);
  return (0, _Array.isEmpty)(accessibleActions) ? null : /*#__PURE__*/_react.default.createElement(_ActionsMenu.ActionsMenu, {
    actions: accessibleActions.map(action_ => action_.actionProps)
  });
};

const ActionsButtons = ({
  display,
  document,
  iconOnly,
  size,
  actions = [],
  onClick = () => {}
}) => {
  const {
    actionsMenus,
    dropdownButtons,
    iconButtons,
    infoButtons,
    textButtons
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
        const actionsMenu = /*#__PURE__*/_react.default.createElement(ActionsMenu_, {
          key: idx,
          action: action,
          document: document
        });

        return (0, _typeGuards.isNil)(actionsMenu) ? acc : { ...acc,
          actionsMenus: [...acc.actionsMenus, actionsMenu]
        };

      case ActionButton.InfoButton:
        const infoButton = makeInfoButton(action);
        return (0, _typeGuards.isNil)(infoButton) ? acc : { ...acc,
          infoButtons: [...acc.infoButtons, infoButton]
        };
    }
  }, {
    textButtons: [],
    iconButtons: [],
    dropdownButtons: [],
    infoButtons: [],
    actionsMenus: []
  });
  return /*#__PURE__*/_react.default.createElement(ActionsButtonsBox, {
    onClick: onClick
  }, textButtons, iconButtons, dropdownButtons, infoButtons, actionsMenus);
};

exports.ActionsButtons = ActionsButtons;

const makeTextButtonAction = props => ({
  type: ActionButton.TextButton,
  actionProps: props.actionProps,
  check: props.check
});

exports.makeTextButtonAction = makeTextButtonAction;

const makeActionsMenuListItem = props => ({
  actionProps: props.actionsProps,
  check: props.check
});

exports.makeActionsMenuListItem = makeActionsMenuListItem;

const makeActionsMenuAction = actions => ({
  type: ActionButton.ActionsMenu,
  actionProps: {
    actions
  }
});

exports.makeActionsMenuAction = makeActionsMenuAction;