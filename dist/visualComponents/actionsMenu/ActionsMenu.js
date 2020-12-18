"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _function = require("fp-ts/lib/function");

var _size = require("../../helpers/size");

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Divider = require("../divider/Divider");

var _List = require("../list/List");

var _Menu = require("../menu/Menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Component
 */
const ActionsMenu = props => {
  const {
    document,
    actions,
    toggle = toggleProps => /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({
      icon: "more_vert",
      display: _buttonTypes.ButtonDisplay.Chromeless
    }, toggleProps)),
    onActionComplete = _function.identity,
    ...domProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, actions.length > 0 && /*#__PURE__*/_react.default.createElement(_PopOver.PopOver, {
    popOver: ({
      onClick,
      ...otherProps
    }) => /*#__PURE__*/_react.default.createElement(_Menu.Menu, _extends({
      onClick: onClick
    }, otherProps), actions.reduce((filtered, action, idx) => {
      if (action.type === 'divider') {
        return filtered.concat( /*#__PURE__*/_react.default.createElement(_Divider.Divider, null));
      }
      /**
       * Setting a field on a menu item to `isFeaturedAction: true`
       * does not have the intended effect it used to. Better to not
       * use this field when creating buttons to be used with the
       * ActionsMenu component.
       * - AR - 20200716
       */


      if (!action.isFeaturedAction) {
        return filtered.concat( /*#__PURE__*/_react.default.createElement(_List.SimpleListItem, {
          key: idx,
          size: _size.Sizes.DP32,
          leftIcon: action.iconName,
          leftIconColor: action.iconColor,
          primaryText: action.label,
          onClick: e => onActionComplete(action.onClick(() => onClick(e), e)),
          disabled: action.disabled
        }, action.children));
      }

      return filtered;
    }, [])),
    toggle: toggleProps => toggle({ ...toggleProps,
      ...domProps
    })
  }));
};

exports.ActionsMenu = ActionsMenu;