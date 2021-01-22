"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggled = exports.Open = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _exports = require("../../../../exports");

var _storybook = require("../../../../helpers/storybook");

var _DrawerMeta = _interopRequireDefault(require("./Drawer.meta.json"));

var _Drawer = require("../Drawer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _storybook.meta)(_DrawerMeta.default, {
  title: 'monorail/core/Drawer',
  parameters: {
    a11y: {
      element: _storybook.A11yElement.Modal
    },
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  }
});

exports.default = _default;
const PaddedDiv = _exports.styled.div`
  padding: 16px;
`;

const DrawerTestContent = () => /*#__PURE__*/_react.default.createElement(PaddedDiv, null, "Hello!");

const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Drawer.Drawer, args, /*#__PURE__*/_react.default.createElement(DrawerTestContent, null))); //#region Hero story in Docs

const Open = (0, _storybook.story)(Template, {
  args: {
    open: true
  }
});
exports.Open = Open;
const Toggled = (0, _storybook.story)(() => {
  const [isOpen, setIsOpen] = _react.default.useState(false);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setIsOpen(true)
  }, "Open"), /*#__PURE__*/_react.default.createElement(_Drawer.Drawer, {
    open: isOpen,
    onClose: () => setIsOpen(false)
  }, /*#__PURE__*/_react.default.createElement(DrawerTestContent, null)));
}); //#endregion

exports.Toggled = Toggled;