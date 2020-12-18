"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllSizes = exports.AllDisplays = exports.Clickable = exports.Initials = exports.Basic = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _storybook = require("../../../../helpers/storybook");

var _AvatarMeta = _interopRequireDefault(require("./Avatar.meta.json"));

var _Avatar = require("../Avatar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _storybook.meta)(_AvatarMeta.default, {
  title: 'monorail/core/Avatar',
  argTypes: {
    ref: _storybook.DISABLED_ARG_TYPE
  },
  parameters: { ..._storybook.DISABLED_ACTIONS
  }
});

exports.default = _default;
const Template = (0, _storybook.story)(args => /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, args), {
  parameters: { ..._storybook.A11Y_ELEMENT__COMPONENT
  }
}); //#region Hero story in Docs

const Basic = (0, _storybook.story)(Template); //#endregion
//#region Distinct configurations

exports.Basic = Basic;
const Initials = (0, _storybook.story)(Template, {
  args: {
    children: 'hi'
  }
});
exports.Initials = Initials;
const Clickable = (0, _storybook.story)(Template, {
  args: {
    'aria-label': 'Aria Label',
    onClick: (0, _addonActions.action)('onClick')
  },
  parameters: { ..._storybook.ENABLED_ACTIONS
  }
}); //#endregion
//#region Prop showcases

exports.Clickable = Clickable;
const AllDisplays = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  display: "default"
}, "de"), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  display: "team"
}, "te")), {
  parameters: { ..._storybook.DISABLED_CONTROLS,
    docs: {
      storyDescription: `- \`default\`: The circular light blue avatar is used to represent a single person.  
- \`team\`: The rounded square dark blue avatar is used to represent a team or group of people.`
    }
  }
});
exports.AllDisplays = AllDisplays;
const AllSizes = (0, _storybook.story)(() => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  size: 16
}, "16"), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  size: 24
}, "24"), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  size: 32
}, "32"), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  size: 40
}, "40"), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  size: 48
}, "48"), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  size: 56
}, "56"), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
  size: 64
}, "64")), {
  parameters: { ..._storybook.DISABLED_CONTROLS
  }
}); //#endregion

exports.AllSizes = AllSizes;