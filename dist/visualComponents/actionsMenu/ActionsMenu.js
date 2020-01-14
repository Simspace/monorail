"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _size = require("../../helpers/size");

var _PopOver = require("../../metaComponents/popOver/PopOver");

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

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
    toggle = toggleProps => _react.default.createElement(_IconButton.IconButton, _extends({
      icon: "more_vert",
      display: _buttonTypes.ButtonDisplay.Chromeless
    }, toggleProps)),
    ...domProps
  } = props;
  return _react.default.createElement(_react.default.Fragment, null, actions.length > 0 && _react.default.createElement(_PopOver.PopOver, {
    popOver: ({
      onClick,
      ...otherProps
    }) => _react.default.createElement(_Menu.Menu, _extends({
      onClick: onClick
    }, otherProps), actions.reduce((filtered, action, idx) => {
      if (!action.isFeaturedAction) {
        return filtered.concat(_react.default.createElement(_List.SimpleListItem, {
          key: idx,
          size: _size.Sizes.DP32,
          leftIcon: action.iconName,
          primaryText: action.label,
          onClick: e => action.onClick(() => onClick(e), e),
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