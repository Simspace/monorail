"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisableEscape = exports.Fullscreen = exports.ClickToOpen = exports.Open = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybook = require("../../../../helpers/storybook");

var _ModalMeta = _interopRequireDefault(require("./Modal.meta.json"));

var _Modal = require("../Modal");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_ModalMeta.default, {
  title: 'monorail/core/Modal',
  argTypes: {
    ref: _storybook.DISABLED_ARG_TYPE
  },
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
const BASIC_PROPS = {
  'aria-label': 'Aria Label (needed for role="dialog")',
  onClose: (0, _addonActions.action)('onClose')
}; //#region Helpers

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "Modalstories___StyledDiv",
  componentId: "sc-6lbldy-0"
})(["padding:8px 16px;display:flex;flex-direction:column;"]);

const ExampleModalContent = () => /*#__PURE__*/_react.default.createElement(_StyledDiv, null, "The content of the modal");

const OpenTemplate = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.Modal, _extends({}, args, {
  open: true
}), /*#__PURE__*/_react.default.createElement(ExampleModalContent, null))), {
  args: { ...BASIC_PROPS
  }
});
const ClickToOpenTemplate = (0, _storybook.story)(args => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setIsOpen(true)
  }, "Click Me"), /*#__PURE__*/_react.default.createElement(_Modal.Modal, _extends({}, args, {
    open: isOpen,
    onClose: () => setIsOpen(false)
  }), /*#__PURE__*/_react.default.createElement(ExampleModalContent, null)));
}, {
  args: { ...BASIC_PROPS
  }
}); //#endregion
//#region Hero story in Docs

const Open = (0, _storybook.story)(OpenTemplate); //#endregion
//#region Distinct configurations

exports.Open = Open;
const ClickToOpen = (0, _storybook.story)(ClickToOpenTemplate, {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_A11Y,
    docs: {
      inlineStories: true
    }
  }
});
exports.ClickToOpen = ClickToOpen;
const Fullscreen = (0, _storybook.story)(OpenTemplate, {
  args: {
    fullScreen: true
  }
});
exports.Fullscreen = Fullscreen;
const DisableEscape = (0, _storybook.story)(ClickToOpenTemplate, {
  args: {
    disableEscapeKeyDown: true
  },
  parameters: { ..._storybook.DISABLED_A11Y
  }
}); //#endregion

exports.DisableEscape = DisableEscape;