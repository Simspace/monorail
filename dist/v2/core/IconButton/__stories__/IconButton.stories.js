"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllSizes = exports.AllShapes = exports.ChromelessContrastDisplay = exports.ChromelessActionDisplay = exports.ChromelessDisplay = exports.OutlineDisplay = exports.PrimaryDisplay = exports.Disabled = exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybook = require("../../../../helpers/storybook");

var _IconButtonMeta = _interopRequireDefault(require("./IconButton.meta.json"));

var _IconButton = require("../IconButton");

var Icons = _interopRequireWildcard(require("../../../icons/Icons"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = (0, _storybook.meta)(_IconButtonMeta.default, {
  title: 'monorail/core/IconButton'
});

exports.default = _default;
const BASIC_PROPS = {
  'aria-label': 'Aria Label',
  children: /*#__PURE__*/_react.default.createElement(Icons.Crown, null),
  onClick: (0, _addonActions.action)('onClick')
};
const BasicTemplate = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({
  "aria-label": BASIC_PROPS['aria-label']
}, args)), {
  args: { ...BASIC_PROPS
  },
  parameters: { ..._storybook.A11Y_ELEMENT__COMPONENT
  }
}); //#region Hero story in Docs

const Basic = (0, _storybook.story)(BasicTemplate); //#endregion
//#region Distinct configurations

exports.Basic = Basic;
const Disabled = (0, _storybook.story)(BasicTemplate, {
  args: {
    disabled: true
  }
}); //#endregion
//#region Prop showcases

exports.Disabled = Disabled;
const PrimaryDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "primary"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "primary",
  disabled: true
}))), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
});
exports.PrimaryDisplay = PrimaryDisplay;
const OutlineDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "outline"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "outline",
  disabled: true
}))), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
});
exports.OutlineDisplay = OutlineDisplay;
const ChromelessDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "chromeless"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "chromeless",
  disabled: true
}))), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
});
exports.ChromelessDisplay = ChromelessDisplay;
const ChromelessActionDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "chromelessAction"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "chromelessAction",
  disabled: true
}))), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
});
exports.ChromelessActionDisplay = ChromelessActionDisplay;
const ChromelessContrastDisplay = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "chromelessContrast"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  display: "chromelessContrast",
  disabled: true
}))), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS,
    backgrounds: {
      default: 'dark'
    }
  },
  storyName: 'ChromelessContrast Display'
});
exports.ChromelessContrastDisplay = ChromelessContrastDisplay;
const AllShapes = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  shape: "circle"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  shape: "square"
}))), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
});
exports.AllShapes = AllShapes;
const AllSizes = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  size: "compact"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  size: "dense"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  size: "default"
})), /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, _extends({}, BASIC_PROPS, {
  size: "large"
}))), {
  parameters: { ..._storybook.DISABLED_ACTIONS,
    ..._storybook.DISABLED_CONTROLS
  }
}); //#endregion

exports.AllSizes = AllSizes;