"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionsMenu = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _buttonTypes = require("../buttons/buttonTypes");

var _IconButton = require("../buttons/IconButton");

var _Divider = require("../divider/Divider");

var _size = require("../helpers/size");

var _List = require("../list/List");

var _Menu = require("../menu/Menu");

var _PopOver = require("../popOver/PopOver");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
 * Components
 */
const ActionsMenu = ({
  document,
  menuItems,
  toggle,
  ...domProps
}) => {
  const featuredItems = menuItems.filter(x => x.featuredAction);
  const standardItems = menuItems.filter(x => !x.featuredAction);
  return _react.default.createElement(_react.default.Fragment, null, menuItems.length > 0 && _react.default.createElement(_PopOver.PopOver, {
    document: document,
    popOver: ({
      onClick,
      ...otherProps
    }) => _react.default.createElement(_Menu.Menu, _extends({
      onClick: onClick
    }, otherProps), featuredItems.map((menuItem, idx) => _react.default.createElement(_List.SimpleListItem, {
      key: idx + menuItem.label,
      size: _size.Sizes.DP32,
      leftIcon: menuItem.iconName,
      primaryText: menuItem.label,
      onClick: e => menuItem.onClick(() => onClick(e))
    }, menuItem.children)), featuredItems.length > 0 && standardItems.length > 0 && _react.default.createElement(_StyledDivider, null), standardItems.map((menuItem, idx) => _react.default.createElement(_List.SimpleListItem, {
      key: idx + menuItem.label,
      size: _size.Sizes.DP32,
      leftIcon: menuItem.iconName,
      primaryText: menuItem.label,
      onClick: e => menuItem.onClick(() => onClick(e))
    }, menuItem.children))),
    toggle: props => toggle({ ...props,
      ...domProps
    })
  }));
};

exports.ActionsMenu = ActionsMenu;
ActionsMenu.defaultProps = {
  toggle: props => _react.default.createElement(_IconButton.IconButton, _extends({
    icon: "more_vert",
    display: _buttonTypes.ButtonDisplay.Chromeless
  }, props))
};

var _StyledDivider = (0, _styledComponents.default)(_Divider.Divider)`margin:4px 0 3px;`;