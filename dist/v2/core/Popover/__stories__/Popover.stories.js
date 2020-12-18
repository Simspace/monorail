"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopRightWithGap = exports.TopRight = exports.ClickToOpen = exports.Open = exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybook = require("../../../../helpers/storybook");

var _PopoverMeta = _interopRequireDefault(require("./Popover.meta.json"));

var _Popover = require("../Popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_PopoverMeta.default, {
  title: 'monorail/core/Popover',
  parameters: {
    a11y: {
      element: _storybook.A11yElement.Popover
    },
    docs: {
      inlineStories: false,
      iframeHeight: 200
    }
  }
});

exports.default = _default;
const BOTTOM_LEFT = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
const TOP_RIGHT = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right'
  },
  transformOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  }
}; //#region Helpers

var _StyledDiv = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "Popoverstories___StyledDiv",
  componentId: "nuewme-0"
})(["padding:8px 16px;display:flex;flex-direction:column;"]);

const ExamplePopoverContent = () => /*#__PURE__*/_react.default.createElement(_StyledDiv, null, "The content of the Popover");

var _StyledDiv2 = /*#__PURE__*/(0, _styledComponents.default)("div").withConfig({
  displayName: "Popoverstories___StyledDiv2",
  componentId: "nuewme-1"
})(["background-color:blue;color:white;font-weight:bold;padding:2px;margin:64px;display:inline-block;"]);

const Template = (0, _storybook.story)(args => {
  const [anchorEl, setAnchorEl] = _react.default.useState(null);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_StyledDiv2, {
    ref: el => setAnchorEl(el)
  }, "Anchor"), /*#__PURE__*/_react.default.createElement(_Popover.Popover, _extends({
    anchorEl: anchorEl,
    onClose: (0, _addonActions.action)('onClose')
  }, args, {
    open: args.open === true && anchorEl !== null
  }), /*#__PURE__*/_react.default.createElement(ExamplePopoverContent, null)));
}); //#endregion
//#region Hero story in Docs

const Open = (0, _storybook.story)(Template, {
  args: { ...BOTTOM_LEFT,
    open: true
  }
}); //#endregion
//#region Distinct configurations

exports.Open = Open;
const ClickToOpen = (0, _storybook.story)(args => {
  const {
    triggerProps,
    popoverProps
  } = (0, _Popover.usePopover)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", triggerProps, "Click Me"), /*#__PURE__*/_react.default.createElement(_Popover.Popover, _extends({}, popoverProps, args), /*#__PURE__*/_react.default.createElement(ExamplePopoverContent, null)));
}, {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_A11Y,
    docs: {
      inlineStories: true
    }
  }
});
exports.ClickToOpen = ClickToOpen;
const TopRight = (0, _storybook.story)(Template, {
  args: { ...TOP_RIGHT,
    open: true
  }
});
exports.TopRight = TopRight;
const TopRightWithGap = (0, _storybook.story)(Template, {
  args: { ...TOP_RIGHT,
    open: true,
    margin: {
      top: -16,
      left: 16
    }
  }
}); //#endregion

exports.TopRightWithGap = TopRightWithGap;