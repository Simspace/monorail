"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuccessType = exports.ErrorType = exports.WarningType = exports.InfoType = exports.FewerItems = exports.ClickToOpen = exports.Open = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybook = require("../../../../helpers/storybook");

var _AlertModalMeta = _interopRequireDefault(require("./AlertModal.meta.json"));

var _AlertModal = require("../AlertModal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_AlertModalMeta.default, {
  title: 'monorail/component/AlertModal',
  parameters: {
    a11y: {
      element: _storybook.A11yElement.Modal
    },
    docs: {
      inlineStories: false,
      iframeHeight: 300
    }
  }
});

exports.default = _default;
const BASIC_PROP_DATA = {
  title: 'Title',
  description: 'This is a description.',
  primaryAction: 'primary',
  secondaryAction: 'secondary'
};
const OpenTemplate = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_AlertModal.AlertModal, _extends({
  open: true,
  onClose: (0, _addonActions.action)('onClose')
}, args)), {
  args: {
    open: true
  }
});
const BasicOpenTemplate = (0, _storybook.story)(OpenTemplate, {
  args: { ...BASIC_PROP_DATA
  }
}); //#region Hero story in Docs

const Open = (0, _storybook.story)(BasicOpenTemplate); //#endregion
//#region Distinct configurations

exports.Open = Open;
const ClickToOpen = (0, _storybook.story)(args => {
  const [isOpen, setIsOpen] = _react.default.useState(false);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => setIsOpen(true)
  }, "Click Me"), /*#__PURE__*/_react.default.createElement(_AlertModal.AlertModal, _extends({}, args, {
    open: args.open || isOpen,
    onClose: () => {
      (0, _addonActions.action)('onClose')();
      setIsOpen(false);
    }
  })));
}, {
  args: { ...BASIC_PROP_DATA
  },
  parameters: { ..._storybook.DISABLED_A11Y,
    docs: {
      inlineStories: true
    }
  }
});
exports.ClickToOpen = ClickToOpen;
const FewerItems = (0, _storybook.story)(OpenTemplate, {
  args: {
    description: BASIC_PROP_DATA.description,
    primaryAction: BASIC_PROP_DATA.primaryAction
  }
}); //#endregion
//#region Prop showcases

exports.FewerItems = FewerItems;
const InfoType = (0, _storybook.story)(BasicOpenTemplate, {
  args: {
    type: 'info'
  },
  storyName: 'Type: Info'
});
exports.InfoType = InfoType;
const WarningType = (0, _storybook.story)(BasicOpenTemplate, {
  args: {
    type: 'warning'
  },
  storyName: 'Type: Warning'
});
exports.WarningType = WarningType;
const ErrorType = (0, _storybook.story)(BasicOpenTemplate, {
  args: {
    type: 'error'
  },
  storyName: 'Type: Error'
});
exports.ErrorType = ErrorType;
const SuccessType = (0, _storybook.story)(BasicOpenTemplate, {
  args: {
    type: 'success'
  },
  storyName: 'Type: Success'
}); //#endregion

exports.SuccessType = SuccessType;