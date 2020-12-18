"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownButton = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _Array = require("fp-ts/lib/Array");

var _Option = require("fp-ts/lib/Option");

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _Button = require("./Button");

var _buttonTypes = require("./buttonTypes");

var _IconButton = require("./IconButton");

var _ButtonsBar = require("../buttonsBar/ButtonsBar");

var _List = require("../list/List");

var _Menu = require("../menu/Menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const overrides = {
  button: (0, _styledComponents.css)(["margin-left:auto;"])
};
/**
 * The onClick event is for clicking the button, not the list item
 * in the dropdown. The logic for clicking the list item is handled
 * in this component.
 */

var _StyledButton = /*#__PURE__*/(0, _styledComponents.default)(_Button.Button).withConfig({
  displayName: "DropdownButton___StyledButton",
  componentId: "sc-1jutvw0-0"
})(["", ""], p => p._css);

const DropdownButton = ({
  listItems,
  disabled
}) => {
  const selectedListItem = (0, _Array.head)(listItems);
  /**
   * you can't have a DropdownButton if there are no items, therefore
   * there must be at least one item in the list and
   * selectedListItem will always be of type some
   */

  if ((0, _Array.isEmpty)(listItems) || (0, _Option.isNone)(selectedListItem)) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_PopOver.PopOver, {
    popOver: popOverProps => /*#__PURE__*/_react.default.createElement(_Menu.Menu, {
      onClick: popOverProps.onClick,
      position: popOverProps.position,
      isOpen: popOverProps.isOpen,
      togglePopOver: popOverProps.togglePopOver,
      closingAnimationCompleted: popOverProps.closingAnimationCompleted
    }, listItems.map((listItem, idx) => /*#__PURE__*/_react.default.createElement(_List.SimpleListItem, _extends({
      key: `${idx}-${listItem.primaryText}`
    }, listItem, {
      onClick: e => {
        listItem.onClick(e);
        popOverProps.onClick(e);
      }
    })))),
    toggle: toggleProps => {
      const selectedListItemValue = selectedListItem.value;
      return /*#__PURE__*/_react.default.createElement(_ButtonsBar.ButtonsBar, {
        size: _buttonTypes.ButtonSize.Compact,
        display: _buttonTypes.ButtonDisplay.Primary
      }, /*#__PURE__*/_react.default.createElement(_StyledButton, {
        onClick: selectedListItemValue.onClick,
        iconLeft: selectedListItemValue.leftIcon,
        iconRight: selectedListItemValue.rightIcon,
        disabled: disabled,
        _css: overrides.button
      }, selectedListItemValue.primaryText), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
        icon: toggleProps.isActive ? 'arrow_drop_up' : 'arrow_drop_down',
        onClick: toggleProps.onClick
      }));
    }
  });
};

exports.DropdownButton = DropdownButton;